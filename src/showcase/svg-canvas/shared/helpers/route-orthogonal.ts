/**
 * Orthogonal line router — split-half model.
 *
 * Each half only dodges the shape it is anchored to.
 * Both halves meet at the raw geometric midpoint.
 *
 *   A.anchor → [halfA avoids shapeA] → mid ← [halfB avoids shapeB] ← B.anchor
 *
 * Routing per half (3 segments max):
 *   1. Exit stub  — moves perpendicularly away from the anchor face until clear of the bbox.
 *   2. Lateral    — turns 90° and travels toward the mid-axis.
 *   3. Approach   — travels along the opposite axis to the midpoint.
 */

import type { ICanvasLine, IWaypoint } from '../../line/model/i-canvas-line';
import type { IShape } from '../../shape/model/i-shape';
import { AnchorPosition } from '../../shared/model/i-entity';

// Minimum clearance from a shape face before the first turn.
const STUB = 20;

// ---------------------------------------------------------------------------
// Exit direction
// ---------------------------------------------------------------------------

/** Perpendicular exit direction for each anchor position. */
function exitDir(pos: AnchorPosition | null): { dx: number; dy: number } {
  switch (pos) {
    case AnchorPosition.LeftCenter:
      return { dx: -1, dy: 0 };
    case AnchorPosition.RightCenter:
      return { dx: 1, dy: 0 };
    case AnchorPosition.TopCenter:
      return { dx: 0, dy: -1 };
    case AnchorPosition.BottomCenter:
      return { dx: 0, dy: 1 };
    // Corners: exit along the nearest face (top/bottom convention)
    case AnchorPosition.TopLeft:
    case AnchorPosition.TopRight:
      return { dx: 0, dy: -1 };
    case AnchorPosition.BottomLeft:
    case AnchorPosition.BottomRight:
      return { dx: 0, dy: 1 };
    default:
      return { dx: 0, dy: 0 };
  }
}

// ---------------------------------------------------------------------------
// Stub length
// ---------------------------------------------------------------------------

/**
 * Guarantees the stub length clears the shape's bounding box by STUB pixels,
 * regardless of how close the endpoint is to the opposite face.
 */
function stubLen(px: number, py: number, dx: number, dy: number, shape: IShape | null): number {
  if (!shape) return STUB;
  const { x, y, width: w } = shape;
  const h = shape.collapsed ? 32 : shape.height;
  if (dx > 0) return Math.max(STUB, x + w + STUB - px);
  if (dx < 0) return Math.max(STUB, px - x + STUB);
  if (dy > 0) return Math.max(STUB, y + h + STUB - py);
  if (dy < 0) return Math.max(STUB, py - y + STUB);
  return STUB;
}

// ---------------------------------------------------------------------------
// Half router
// ---------------------------------------------------------------------------

/**
 * Computes waypoints for one half: from endpoint P toward midpoint M,
 * exiting in direction (dx, dy).
 *
 * Returns an array starting at P and ending at M.
 */
function routeHalf(
  px: number,
  py: number,
  dx: number,
  dy: number,
  mx: number,
  my: number,
  shape: IShape | null
): IWaypoint[] {
  // Free endpoint (no anchor) — simple L-corner toward midpoint.
  if (dx === 0 && dy === 0) {
    return [
      { x: px, y: py },
      { x: mx, y: py },
      { x: mx, y: my },
    ];
  }

  const stub = stubLen(px, py, dx, dy, shape);
  const ex = px + dx * stub;
  const ey = py + dy * stub;

  if (dx !== 0) {
    // Horizontal exit → vertical turn toward mid.y → horizontal to mid.x
    return [
      { x: px, y: py },
      { x: ex, y: py },
      { x: ex, y: my },
      { x: mx, y: my },
    ];
  } else {
    // Vertical exit → horizontal turn toward mid.x → vertical to mid.y
    return [
      { x: px, y: py },
      { x: px, y: ey },
      { x: mx, y: ey },
      { x: mx, y: my },
    ];
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Full orthogonal route between two anchored endpoints.
 *
 * Returns a flat waypoint list: [P1, …interior…, mid, …interior…, P2].
 */
export function routeOrthogonal(
  x1: number,
  y1: number,
  posA: AnchorPosition | null,
  x2: number,
  y2: number,
  posB: AnchorPosition | null,
  shapeA: IShape | null,
  shapeB: IShape | null
): IWaypoint[] {
  const dirA = exitDir(posA);
  const dirB = exitDir(posB);

  const mx = Math.round((x1 + x2) / 2);
  const my = Math.round((y1 + y2) / 2);

  const halfA = routeHalf(x1, y1, dirA.dx, dirA.dy, mx, my, shapeA);
  const halfB = routeHalf(x2, y2, dirB.dx, dirB.dy, mx, my, shapeB);

  // halfA ends at mid, halfB reversed starts at mid — drop the duplicate.
  const halfBRev = [...halfB].reverse();
  return [...halfA, ...halfBRev.slice(1)];
}

/** Converts a waypoint array to an SVG `points` attribute string. */
export function waypointsToPoints(waypoints: IWaypoint[]): string {
  return waypoints.map((p) => `${p.x},${p.y}`).join(' ');
}

/**
 * Recomputes `waypoints` for a line from the store.
 * Returns [] for linear mode.
 * Shapes array must contain the currently-committed positions.
 */
export function recomputeWaypoints(ln: ICanvasLine, shapes: IShape[]): IWaypoint[] {
  if (ln.mode !== 'orthogonal') return [];

  const shapeA = ln.startConnection
    ? (shapes.find((s) => s.id === ln.startConnection!.shapeId) ?? null)
    : null;
  const shapeB = ln.endConnection
    ? (shapes.find((s) => s.id === ln.endConnection!.shapeId) ?? null)
    : null;

  const posA = shapeA?.anchors.find((a) => a.id === ln.startConnection!.anchorId)?.position ?? null;
  const posB = shapeB?.anchors.find((a) => a.id === ln.endConnection!.anchorId)?.position ?? null;

  return routeOrthogonal(ln.x1, ln.y1, posA, ln.x2, ln.y2, posB, shapeA, shapeB);
}

/**
 * Pure math and signal-free helpers for the SVG canvas.
 * No DOM side-effects — safe to call anywhere.
 */

import type { ILineConnection } from '../../line/model/i-canvas-line';
import { buildDiamondAnchors } from '../../shape/entity/canvas-diamond';
import { buildSquareAnchors } from '../../shape/entity/canvas-square';
import type { IShape } from '../../shape/model/i-shape';
import { ShapeKind } from '../../shape/model/i-shape';
import type { AnchorHit } from '../model/i-drag';
import { MIN_SIZE, SNAP_RADIUS } from '../model/i-drag';
import { AnchorPosition } from '../model/i-entity';

// ---------------------------------------------------------------------------
// SVG coordinate helpers
// ---------------------------------------------------------------------------

export const getSvgCoords = (
  e: MouseEvent,
  svgEl: SVGSVGElement | null
): { x: number; y: number } => {
  const r = (svgEl ?? (e.currentTarget as SVGSVGElement)).getBoundingClientRect();
  return { x: Math.round(e.clientX - r.left), y: Math.round(e.clientY - r.top) };
};

// ---------------------------------------------------------------------------
// Anchor snap helpers
// ---------------------------------------------------------------------------

export const findAnchorAt = (px: number, py: number, shapes: IShape[]): AnchorHit | null => {
  for (const s of shapes) {
    for (const a of s.anchors) {
      if (Math.hypot(a.x - px, a.y - py) <= SNAP_RADIUS)
        return { x: a.x, y: a.y, conn: { shapeId: s.id, anchorId: a.id } };
    }
  }
  return null;
};

export const snapToAnchor = (
  px: number,
  py: number,
  shapes: IShape[]
): { x: number; y: number; conn: ILineConnection | null } => {
  const hit = findAnchorAt(px, py, shapes);
  return hit ? { x: hit.x, y: hit.y, conn: hit.conn } : { x: px, y: py, conn: null };
};

// ---------------------------------------------------------------------------
// Shape model rebuild
// ---------------------------------------------------------------------------

export const rebuildShape = (
  s: IShape,
  nx: number,
  ny: number,
  nw?: number,
  nh?: number
): IShape => {
  const w = nw ?? s.width;
  const h = nh ?? s.height;
  const anchors =
    s.kind === ShapeKind.Diamond
      ? buildDiamondAnchors(s.id, nx, ny, w, h)
      : buildSquareAnchors(s.id, nx, ny, w, h);
  return { ...s, x: nx, y: ny, width: w, height: h, anchors };
};

// ---------------------------------------------------------------------------
// Resize geometry — pure math, no side-effects
// ---------------------------------------------------------------------------

export const calcResizeGeom = (
  origX: number,
  origY: number,
  origW: number,
  origH: number,
  anchorPos: AnchorPosition,
  dx: number,
  dy: number
): { rx: number; ry: number; rw: number; rh: number } => {
  let rx = origX,
    ry = origY,
    rw = origW,
    rh = origH;

  if (anchorPos === AnchorPosition.TopLeft) {
    rx = origX + dx;
    ry = origY + dy;
    rw = Math.max(MIN_SIZE, origW - dx);
    rh = Math.max(MIN_SIZE, origH - dy);
    if (rw === MIN_SIZE) rx = origX + origW - MIN_SIZE;
    if (rh === MIN_SIZE) ry = origY + origH - MIN_SIZE;
  } else if (anchorPos === AnchorPosition.TopRight) {
    ry = origY + dy;
    rw = Math.max(MIN_SIZE, origW + dx);
    rh = Math.max(MIN_SIZE, origH - dy);
    if (rh === MIN_SIZE) ry = origY + origH - MIN_SIZE;
  } else if (anchorPos === AnchorPosition.BottomLeft) {
    rx = origX + dx;
    rw = Math.max(MIN_SIZE, origW - dx);
    rh = Math.max(MIN_SIZE, origH + dy);
    if (rw === MIN_SIZE) rx = origX + origW - MIN_SIZE;
  } else {
    // BottomRight
    rw = Math.max(MIN_SIZE, origW + dx);
    rh = Math.max(MIN_SIZE, origH + dy);
  }

  return { rx, ry, rw, rh };
};

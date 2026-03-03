/**
 * Direct DOM mutation operations for the SVG canvas.
 * Called inside requestAnimationFrame callbacks during drag — no signals touched.
 */

import type { ICanvasLine } from '../../line/model/i-canvas-line';
import { buildDiamondAnchors } from '../../shape/entity/canvas-diamond';
import { buildSquareAnchors } from '../../shape/entity/canvas-square';
import type { IShape } from '../../shape/model/i-shape';
import { ShapeKind } from '../../shape/model/i-shape';

// ---------------------------------------------------------------------------
// Shape body + label position
// ---------------------------------------------------------------------------

/** Moves the body element (rect/polygon) and text label for a shape in the DOM. */
export const updateShapeBodyDom = (
  g: SVGGElement,
  s: IShape,
  nx: number,
  ny: number,
  nw: number,
  nh: number
): void => {
  const rectEl = g.querySelector('rect');
  const polyEl = g.querySelector('polygon');

  if (rectEl) {
    rectEl.setAttribute('x', String(nx));
    rectEl.setAttribute('y', String(ny));
    rectEl.setAttribute('width', String(nw));
    rectEl.setAttribute('height', s.collapsed ? '32' : String(nh));
  } else if (polyEl) {
    const cx = nx + nw / 2;
    const cy = ny + nh / 2;
    polyEl.setAttribute('points', `${cx},${ny} ${nx + nw},${cy} ${cx},${ny + nh} ${nx},${cy}`);
  }

  const txt = g.querySelector('text');
  if (txt) {
    txt.setAttribute('x', String(nx + nw / 2));
    txt.setAttribute('y', String(ny + nh / 2));
  }

  // foreignObject card (rect / square shapes)
  const fo = g.querySelector('foreignObject');
  if (fo) {
    fo.setAttribute('x', String(nx));
    fo.setAttribute('y', String(ny));
    fo.setAttribute('width', String(nw));
    fo.setAttribute('height', s.collapsed ? '32' : String(nh));
  }
};

// ---------------------------------------------------------------------------
// Anchor circles
// ---------------------------------------------------------------------------

/**
 * Repositions all anchor circles inside [data-anchor-group] for a shape.
 * Returns the freshly computed anchor list so callers can reuse it
 * for `updateConnectedLinesDom` without a second build pass.
 */
export const rebuildAnchorsDom = (
  g: SVGGElement,
  s: IShape,
  nx: number,
  ny: number,
  nw: number,
  nh: number
): Array<{ id: string; x: number; y: number }> => {
  const newAnchors =
    s.kind === ShapeKind.Diamond
      ? buildDiamondAnchors(s.id, nx, ny, nw, nh)
      : buildSquareAnchors(s.id, nx, ny, nw, nh);

  const ag = g.querySelector(`[data-anchor-group="${s.id}"]`);
  if (ag) {
    for (const a of newAnchors) {
      const circle = ag.querySelector<SVGCircleElement>(`[data-anchor-pos="${a.position}"]`);
      if (circle) {
        circle.setAttribute('cx', String(a.x));
        circle.setAttribute('cy', String(a.y));
      }
    }
  }

  return newAnchors;
};

// ---------------------------------------------------------------------------
// Connected line endpoints
// ---------------------------------------------------------------------------

/**
 * Moves every SVG line element whose connected endpoint belongs to the given shape.
 * Reuses the anchor list returned by `rebuildAnchorsDom` — no extra computation.
 */
export const updateConnectedLinesDom = (
  svgEl: SVGSVGElement,
  shapeId: string,
  anchors: Array<{ id: string; x: number; y: number }>,
  lines: ICanvasLine[]
): void => {
  for (const ln of lines) {
    const isStart = ln.startConnection?.shapeId === shapeId;
    const isEnd = ln.endConnection?.shapeId === shapeId;
    if (!isStart && !isEnd) continue;

    const lg = svgEl.querySelector<SVGGElement>(`[data-entity-id="${ln.id}"]`);
    if (!lg) continue;

    const lineEls = lg.querySelectorAll('line');

    // Track updated endpoint coords so the label midpoint stays correct.
    let newX1 = ln.x1,
      newY1 = ln.y1,
      newX2 = ln.x2,
      newY2 = ln.y2;

    if (isStart) {
      const a = anchors.find((a) => a.id === ln.startConnection!.anchorId);
      if (a) {
        newX1 = a.x;
        newY1 = a.y;
        lineEls.forEach((el) => {
          el.setAttribute('x1', String(a.x));
          el.setAttribute('y1', String(a.y));
        });
      }
    }

    if (isEnd) {
      const a = anchors.find((a) => a.id === ln.endConnection!.anchorId);
      if (a) {
        newX2 = a.x;
        newY2 = a.y;
        lineEls.forEach((el) => {
          el.setAttribute('x2', String(a.x));
          el.setAttribute('y2', String(a.y));
        });
      }
    }

    // Reposition mid-label to new line centre (covers both endpoint-only
    // and both-endpoints cases transparently).
    const label = lg.querySelector('[data-line-label]');
    if (label) {
      const midX = Math.round((newX1 + newX2) / 2);
      const midY = Math.round((newY1 + newY2) / 2);
      label.querySelector('rect')?.setAttribute('x', String(midX - 28));
      label.querySelector('rect')?.setAttribute('y', String(midY - 9));
      label.querySelector('text')?.setAttribute('x', String(midX));
      label.querySelector('text')?.setAttribute('y', String(midY + 4));
    }
  }
};

/**
 * Direct DOM mutation operations for the SVG canvas.
 * Called inside requestAnimationFrame callbacks during drag — no signals touched.
 */

import type { ICanvasLine, IShape } from './canvas-shape.types';
import { ShapeKind } from './canvas-shape.types';
import { buildDiamondAnchors, buildSquareAnchors } from './entity';

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
    rectEl.setAttribute('height', String(nh));
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

    if (isStart) {
      const a = anchors.find((a) => a.id === ln.startConnection!.anchorId);
      if (a)
        lineEls.forEach((el) => {
          el.setAttribute('x1', String(a.x));
          el.setAttribute('y1', String(a.y));
        });
    }

    if (isEnd) {
      const a = anchors.find((a) => a.id === ln.endConnection!.anchorId);
      if (a)
        lineEls.forEach((el) => {
          el.setAttribute('x2', String(a.x));
          el.setAttribute('y2', String(a.y));
        });
    }
  }
};

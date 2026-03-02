/**
 * CanvasDiamond — prototype constructor implementing IShape for a diamond.
 *
 * Diamond geometry:
 *   Center: (cx, cy) = (x + w/2, y + h/2)
 *   4 diamond vertices  → mapped to Top/Right/Bottom/Left edge midpoints
 *   4 edge midpoints    → midpoints of each diamond edge segment
 *                         mapped to TopRight/BottomRight/BottomLeft/TopLeft anchors
 *
 *   TopCenter    → top vertex    (cx, y)
 *   RightCenter  → right vertex  (x+w, cy)
 *   BottomCenter → bottom vertex (cx, y+h)
 *   LeftCenter   → left vertex   (x, cy)
 *
 *   TopRight    → mid of top→right edge:    (cx + w/4, cy - h/4)
 *   BottomRight → mid of right→bottom edge: (cx + w/4, cy + h/4)
 *   BottomLeft  → mid of bottom→left edge:  (cx - w/4, cy + h/4)
 *   TopLeft     → mid of left→top edge:     (cx - w/4, cy - h/4)
 */

import { AnchorPosition } from '../canvas-entity.types';
import type { IAnchor, IShape } from '../canvas-shape.types';
import { ShapeKind } from '../canvas-shape.types';
import { CanvasEntity } from './canvas-entity';

const buildDiamondAnchors = (
  entityId: string,
  x: number,
  y: number,
  w: number,
  h: number
): IAnchor[] => {
  const cx = x + w / 2;
  const cy = y + h / 2;

  return [
    // Diamond vertices  (mapped to edge-midpoint positions for consistent API)
    { id: `${entityId}-tc`, position: AnchorPosition.TopCenter, x: cx, y: y, entityId },
    { id: `${entityId}-rc`, position: AnchorPosition.RightCenter, x: x + w, y: cy, entityId },
    { id: `${entityId}-bc`, position: AnchorPosition.BottomCenter, x: cx, y: y + h, entityId },
    { id: `${entityId}-lc`, position: AnchorPosition.LeftCenter, x: x, y: cy, entityId },
    // Midpoints of each diamond edge segment  (mapped to vertex positions)
    {
      id: `${entityId}-tr`,
      position: AnchorPosition.TopRight,
      x: cx + w / 4,
      y: cy - h / 4,
      entityId,
    },
    {
      id: `${entityId}-br`,
      position: AnchorPosition.BottomRight,
      x: cx + w / 4,
      y: cy + h / 4,
      entityId,
    },
    {
      id: `${entityId}-bl`,
      position: AnchorPosition.BottomLeft,
      x: cx - w / 4,
      y: cy + h / 4,
      entityId,
    },
    {
      id: `${entityId}-tl`,
      position: AnchorPosition.TopLeft,
      x: cx - w / 4,
      y: cy - h / 4,
      entityId,
    },
  ];
};

export const CanvasDiamond = function (
  this: IShape,
  id: string,
  code: string,
  name: string,
  x: number,
  y: number,
  width: number,
  height: number
): void {
  CanvasEntity.call(this as unknown as InstanceType<typeof CanvasEntity>, id, code, name);

  this.kind = ShapeKind.Diamond;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.anchors = buildDiamondAnchors(id, x, y, width, height);
} as unknown as new (
  id: string,
  code: string,
  name: string,
  x: number,
  y: number,
  width: number,
  height: number
) => IShape;

CanvasDiamond.prototype = Object.create(CanvasEntity.prototype);
CanvasDiamond.prototype.constructor = CanvasDiamond;
CanvasDiamond.prototype.updateGeometry = function (
  this: IShape,
  x: number,
  y: number,
  w: number,
  h: number
): void {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.anchors = buildDiamondAnchors(this.id, x, y, w, h);
};

export { buildDiamondAnchors };

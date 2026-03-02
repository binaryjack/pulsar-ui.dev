/**
 * CanvasSquare — prototype constructor implementing IShape for a square.
 * Computes 8 anchor points (4 vertices + 4 edge midpoints).
 */

import { AnchorPosition } from '../canvas-entity.types';
import type { IAnchor, IShape } from '../canvas-shape.types';
import { ShapeKind } from '../canvas-shape.types';
import { CanvasEntity } from './canvas-entity';

const buildSquareAnchors = (
  entityId: string,
  x: number,
  y: number,
  w: number,
  h: number
): IAnchor[] => {
  const cx = x + w / 2;
  const cy = y + h / 2;

  return [
    // Vertices
    { id: `${entityId}-tl`, position: AnchorPosition.TopLeft, x, y, entityId },
    { id: `${entityId}-tr`, position: AnchorPosition.TopRight, x: x + w, y, entityId },
    { id: `${entityId}-bl`, position: AnchorPosition.BottomLeft, x, y: y + h, entityId },
    { id: `${entityId}-br`, position: AnchorPosition.BottomRight, x: x + w, y: y + h, entityId },
    // Edge midpoints
    { id: `${entityId}-tc`, position: AnchorPosition.TopCenter, x: cx, y, entityId },
    { id: `${entityId}-rc`, position: AnchorPosition.RightCenter, x: x + w, y: cy, entityId },
    { id: `${entityId}-bc`, position: AnchorPosition.BottomCenter, x: cx, y: y + h, entityId },
    { id: `${entityId}-lc`, position: AnchorPosition.LeftCenter, x, y: cy, entityId },
  ];
};

export const CanvasSquare = function (
  this: IShape,
  id: string,
  code: string,
  name: string,
  x: number,
  y: number,
  size: number
): void {
  CanvasEntity.call(this as unknown as InstanceType<typeof CanvasEntity>, id, code, name);

  this.kind = ShapeKind.Square;
  this.x = x;
  this.y = y;
  this.width = size;
  this.height = size;
  this.anchors = buildSquareAnchors(id, x, y, size, size);
} as unknown as new (
  id: string,
  code: string,
  name: string,
  x: number,
  y: number,
  size: number
) => IShape;

CanvasSquare.prototype = Object.create(CanvasEntity.prototype);
CanvasSquare.prototype.constructor = CanvasSquare;
CanvasSquare.prototype.updateGeometry = function (
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
  this.anchors = buildSquareAnchors(this.id, x, y, w, h);
};

/** Exported helper so other shapes can reuse the same anchor computation */
export { buildSquareAnchors };

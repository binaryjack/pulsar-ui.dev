/**
 * CanvasDiamond — prototype constructor for a diamond shape.
 * Diamond vertices map to edge-midpoint anchor positions for a consistent API.
 */

import { AnchorPosition } from '../../shared/model/i-entity';
import type { IAnchor, IShape } from '../model/i-shape';
import { ShapeKind } from '../model/i-shape';
import { CanvasEntity } from './canvas-entity';

export const buildDiamondAnchors = (
  entityId: string,
  x: number,
  y: number,
  w: number,
  h: number
): IAnchor[] => {
  const cx = x + w / 2;
  const cy = y + h / 2;
  return [
    // Diamond vertices → edge-midpoint positions
    { id: `${entityId}-tc`, position: AnchorPosition.TopCenter, x: cx, y: y, entityId },
    { id: `${entityId}-rc`, position: AnchorPosition.RightCenter, x: x + w, y: cy, entityId },
    { id: `${entityId}-bc`, position: AnchorPosition.BottomCenter, x: cx, y: y + h, entityId },
    { id: `${entityId}-lc`, position: AnchorPosition.LeftCenter, x: x, y: cy, entityId },
    // Edge segment midpoints → vertex positions
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
  this.collapsed = false;
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

export { buildDiamondAnchors as buildDiamondAnchorsAlias };

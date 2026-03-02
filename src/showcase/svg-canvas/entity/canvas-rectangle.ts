/**
 * CanvasRectangle — prototype constructor implementing IShape for a rectangle.
 * Same 8-anchor scheme as square (anchors at vertices + edge midpoints).
 */

import type { IShape } from '../canvas-shape.types';
import { ShapeKind } from '../canvas-shape.types';
import { CanvasEntity } from './canvas-entity';
import { buildSquareAnchors } from './canvas-square';

export const CanvasRectangle = function (
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

  this.kind = ShapeKind.Rectangle;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  // Reuse the rectangular anchor formula
  this.anchors = buildSquareAnchors(id, x, y, width, height);
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

CanvasRectangle.prototype = Object.create(CanvasEntity.prototype);
CanvasRectangle.prototype.constructor = CanvasRectangle;
CanvasRectangle.prototype.updateGeometry = function (
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

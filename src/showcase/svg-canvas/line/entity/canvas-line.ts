/**
 * CanvasLine — prototype constructor implementing ICanvasLine.
 * Extends CanvasEntity with two endpoints and cardinality bindings.
 */

import { CanvasEntity } from '../../shape/entity/canvas-entity';
import type { ICardinality } from '../../shared/model/i-entity';
import type { ICanvasLine } from '../model/i-canvas-line';

export const CanvasLine = function (
  this: ICanvasLine,
  id: string,
  code: string,
  name: string,
  x1: number,
  y1: number,
  x2: number,
  y2: number
): void {
  CanvasEntity.call(this as unknown as InstanceType<typeof CanvasEntity>, id, code, name);
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.mode = 'linear';
  this.waypoints = [];
  this.leftCardinality = null as ICardinality | null;
  this.rightCardinality = null as ICardinality | null;
  this.startConnection = null;
  this.endConnection = null;
} as unknown as new (
  id: string,
  code: string,
  name: string,
  x1: number,
  y1: number,
  x2: number,
  y2: number
) => ICanvasLine;

CanvasLine.prototype = Object.create(CanvasEntity.prototype);
CanvasLine.prototype.constructor = CanvasLine;

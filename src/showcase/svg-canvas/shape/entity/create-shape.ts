/** Shape factory helpers — create typed IShape instances from kind + geometry. */

import type { IShape } from '../model/i-shape';
import { ShapeKind } from '../model/i-shape';
import { CanvasDiamond } from './canvas-diamond';
import { CanvasRectangle } from './canvas-rectangle';
import { CanvasSquare } from './canvas-square';

// ── ID sequence (shared within the module) ────────────────────────────────────

let _seq = 0;

export const nextShapeId = (prefix = 'e'): string => `${prefix}-${++_seq}`;
export const resetShapeIdSequence = (): void => {
  _seq = 0;
};

// ── Factories ─────────────────────────────────────────────────────────────────

export const createSquare = (x: number, y: number, size: number): IShape => {
  const id = nextShapeId('sq');
  return new (CanvasSquare as unknown as new (
    id: string,
    code: string,
    name: string,
    x: number,
    y: number,
    size: number
  ) => IShape)(id, id, `Square ${_seq}`, x, y, size);
};

export const createRectangle = (x: number, y: number, width: number, height: number): IShape => {
  const id = nextShapeId('rect');
  return new (CanvasRectangle as unknown as new (
    id: string,
    code: string,
    name: string,
    x: number,
    y: number,
    width: number,
    height: number
  ) => IShape)(id, id, `Rect ${_seq}`, x, y, width, height);
};

export const createDiamond = (x: number, y: number, width: number, height: number): IShape => {
  const id = nextShapeId('dia');
  return new (CanvasDiamond as unknown as new (
    id: string,
    code: string,
    name: string,
    x: number,
    y: number,
    width: number,
    height: number
  ) => IShape)(id, id, `Diamond ${_seq}`, x, y, width, height);
};

/** Generic factory — dispatches to the right constructor by ShapeKind. */
export const createShape = (
  kind: ShapeKind,
  x: number,
  y: number,
  width: number,
  height: number
): IShape => {
  if (kind === ShapeKind.Square) return createSquare(x, y, Math.max(width, height));
  if (kind === ShapeKind.Diamond) return createDiamond(x, y, width, height);
  return createRectangle(x, y, width, height);
};

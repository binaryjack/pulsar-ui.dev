/**
 * Factory helpers — generate unique IDs and instantiate canvas entities.
 */

import type { ICanvasLine, IShape } from '../canvas-shape.types';
import { ShapeKind } from '../canvas-shape.types';
import { CanvasDiamond } from './canvas-diamond';
import { CanvasLine } from './canvas-line';
import { CanvasRectangle } from './canvas-rectangle';
import { CanvasSquare } from './canvas-square';

// ---------------------------------------------------------------------------
// ID generation
// ---------------------------------------------------------------------------

let _seq = 0;

export const nextId = (prefix = 'e'): string => {
  _seq += 1;
  return `${prefix}-${_seq}`;
};

export const resetIdSequence = (): void => {
  _seq = 0;
};

// ---------------------------------------------------------------------------
// Line factory
// ---------------------------------------------------------------------------

export const createCanvasLine = (x1: number, y1: number, x2: number, y2: number): ICanvasLine => {
  const id = nextId('line');
  return new (CanvasLine as unknown as new (
    id: string,
    code: string,
    name: string,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => ICanvasLine)(id, id, `Line ${_seq}`, x1, y1, x2, y2);
};

// ---------------------------------------------------------------------------
// Shape factories
// ---------------------------------------------------------------------------

export const createSquare = (x: number, y: number, size: number): IShape => {
  const id = nextId('sq');
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
  const id = nextId('rect');
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
  const id = nextId('dia');
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

// ---------------------------------------------------------------------------
// Generic shape factory (dispatch by kind)
// ---------------------------------------------------------------------------

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

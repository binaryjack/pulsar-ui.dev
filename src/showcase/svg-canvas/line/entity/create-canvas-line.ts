/** Line factory helper. */

import type { ICanvasLine } from '../model/i-canvas-line';
import { CanvasLine } from './canvas-line';

let _seq = 0;

export const nextLineId = (): string => `line-${++_seq}`;
export const resetLineIdSequence = (): void => {
  _seq = 0;
};

export const createCanvasLine = (x1: number, y1: number, x2: number, y2: number): ICanvasLine => {
  const id = nextLineId();
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

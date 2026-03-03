/** Board-level types: tool selection and draw state — board feature slice model. */

import type { ShapeKind } from '../../shape/model/i-shape';

export type ToolKind = 'select' | 'line' | ShapeKind;

export interface IDrawPoint {
  x: number;
  y: number;
}

export interface IBoardSliceState {
  selectedId: string | null;
  activeTool: ToolKind;
  isDrawing: boolean;
  drawStart: IDrawPoint | null;
  drawEnd: IDrawPoint | null;
  isDragging: boolean;
  hoveredShapeId: string | null;
}

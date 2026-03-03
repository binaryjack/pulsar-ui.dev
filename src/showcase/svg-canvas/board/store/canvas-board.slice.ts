/** Board slice — reducer, actions, initial state. */

import type { IStoreAction } from '@pulsar-framework/pulsar.dev';
import type { IBoardSliceState, IDrawPoint, ToolKind } from '../model/i-board';

// ── Initial state ─────────────────────────────────────────────────────────────

export const boardInitialState: IBoardSliceState = {
  selectedId: null,
  activeTool: 'select',
  isDrawing: false,
  drawStart: null,
  drawEnd: null,
  isDragging: false,
  hoveredShapeId: null,
};

// ── Actions ───────────────────────────────────────────────────────────────────

export type IBoardAction =
  | { type: 'BOARD/SET_SELECTED'; payload: string | null }
  | { type: 'BOARD/SET_TOOL'; payload: ToolKind }
  | { type: 'BOARD/SET_DRAWING'; payload: boolean }
  | { type: 'BOARD/SET_DRAW_START'; payload: IDrawPoint | null }
  | { type: 'BOARD/SET_DRAW_END'; payload: IDrawPoint | null }
  | { type: 'BOARD/SET_DRAGGING'; payload: boolean }
  | { type: 'BOARD/SET_HOVERED'; payload: string | null };

// ── Reducer ───────────────────────────────────────────────────────────────────

export function boardReducer(state: IBoardSliceState, action: IStoreAction): IBoardSliceState {
  const a = action as IBoardAction;
  switch (a.type) {
    case 'BOARD/SET_SELECTED':
      return { ...state, selectedId: a.payload };
    case 'BOARD/SET_TOOL':
      return { ...state, activeTool: a.payload };
    case 'BOARD/SET_DRAWING':
      return { ...state, isDrawing: a.payload };
    case 'BOARD/SET_DRAW_START':
      return { ...state, drawStart: a.payload };
    case 'BOARD/SET_DRAW_END':
      return { ...state, drawEnd: a.payload };
    case 'BOARD/SET_DRAGGING':
      return { ...state, isDragging: a.payload };
    case 'BOARD/SET_HOVERED':
      return { ...state, hoveredShapeId: a.payload };
    default:
      return state;
  }
}

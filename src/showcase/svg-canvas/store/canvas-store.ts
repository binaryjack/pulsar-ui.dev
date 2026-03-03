/** Root canvas store — combines all feature slices + exports memoized selectors. */

import type { IStoreAction } from '@pulsar-framework/pulsar.dev';
import { createStore } from '@pulsar-framework/pulsar.dev';

import { boardInitialState, boardReducer } from '../board/store/canvas-board.slice';
import { lineInitialState, lineReducer } from '../line/store/canvas-line.slice';
import { modalInitialState, modalReducer } from '../modal/store/canvas-modal.slice';
import { shapeInitialState, shapeReducer } from '../shape/store/canvas-shape.slice';

import type { IBoardSliceState } from '../board/model/i-board';
import type { ILineSliceState } from '../line/store/canvas-line.slice';
import type { IModalSliceState } from '../modal/store/canvas-modal.slice';
import type { IShapeSliceState } from '../shape/store/canvas-shape.slice';

// ── Root state ────────────────────────────────────────────────────────────────

export interface ICanvasRootState {
  shapes: IShapeSliceState;
  lines: ILineSliceState;
  modal: IModalSliceState;
  board: IBoardSliceState;
}

const rootInitialState: ICanvasRootState = {
  shapes: shapeInitialState,
  lines: lineInitialState,
  modal: modalInitialState,
  board: boardInitialState,
};

// ── Root reducer ──────────────────────────────────────────────────────────────

function rootReducer(state: ICanvasRootState, action: IStoreAction): ICanvasRootState {
  return {
    shapes: shapeReducer(state.shapes, action),
    lines: lineReducer(state.lines, action),
    modal: modalReducer(state.modal, action),
    board: boardReducer(state.board, action),
  };
}

// ── Store singleton ───────────────────────────────────────────────────────────

export const canvasStore = createStore<ICanvasRootState>(rootInitialState, rootReducer, [], {
  name: 'canvas-store',
});

// ── Selectors (reactive, memoized via createMemo) ─────────────────────────────

export const selectShapes = canvasStore.select((s) => s.shapes.items);
export const selectLines = canvasStore.select((s) => s.lines.items);
export const selectModal = canvasStore.select((s) => s.modal.current);
export const selectSelectedId = canvasStore.select((s) => s.board.selectedId);
export const selectActiveTool = canvasStore.select((s) => s.board.activeTool);
export const selectIsDrawing = canvasStore.select((s) => s.board.isDrawing);
export const selectDrawStart = canvasStore.select((s) => s.board.drawStart);
export const selectDrawEnd = canvasStore.select((s) => s.board.drawEnd);
export const selectIsDragging = canvasStore.select((s) => s.board.isDragging);
export const selectHoveredShapeId = canvasStore.select((s) => s.board.hoveredShapeId);

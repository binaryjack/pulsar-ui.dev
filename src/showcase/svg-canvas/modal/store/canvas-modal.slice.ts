/** Modal slice — reducer, actions, initial state. */

import type { IStoreAction } from '@pulsar-framework/pulsar.dev';
import type { ICanvasModalState } from '../model/i-canvas-modal';

// ── State ─────────────────────────────────────────────────────────────────────

export interface IModalSliceState {
  current: ICanvasModalState | null;
}

export const modalInitialState: IModalSliceState = { current: null };

// ── Actions ───────────────────────────────────────────────────────────────────

export type IModalAction =
  | { type: 'MODAL/OPEN'; payload: ICanvasModalState }
  | { type: 'MODAL/CLOSE' }
  | { type: 'MODAL/SET_NAME'; payload: string };

// ── Reducer ───────────────────────────────────────────────────────────────────

export function modalReducer(state: IModalSliceState, action: IStoreAction): IModalSliceState {
  const a = action as IModalAction;
  switch (a.type) {
    case 'MODAL/OPEN':
      return { current: a.payload };
    case 'MODAL/CLOSE':
      return { current: null };
    case 'MODAL/SET_NAME':
      if (state.current === null) return state;
      return { current: { ...state.current, name: a.payload } };
    default:
      return state;
  }
}

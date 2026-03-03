/** Line slice — reducer, actions, initial state. */

import type { IStoreAction } from '@pulsar-framework/pulsar.dev';
import type { ICanvasLine } from '../model/i-canvas-line';

// ── State ─────────────────────────────────────────────────────────────────────

export interface ILineSliceState {
  items: ICanvasLine[];
}

export const lineInitialState: ILineSliceState = { items: [] };

// ── Actions ───────────────────────────────────────────────────────────────────

export type ILineAction =
  | { type: 'LINES/SET'; payload: ICanvasLine[] }
  | { type: 'LINES/ADD'; payload: ICanvasLine }
  | { type: 'LINES/UPDATE'; payload: ICanvasLine }
  | { type: 'LINES/REMOVE'; payload: string }; // line id

// ── Reducer ───────────────────────────────────────────────────────────────────

export function lineReducer(state: ILineSliceState, action: IStoreAction): ILineSliceState {
  const a = action as ILineAction;
  switch (a.type) {
    case 'LINES/SET':
      return { items: a.payload };
    case 'LINES/ADD':
      return { items: [...state.items, a.payload] };
    case 'LINES/UPDATE':
      return { items: state.items.map((l) => (l.id === a.payload.id ? a.payload : l)) };
    case 'LINES/REMOVE':
      return { items: state.items.filter((l) => l.id !== a.payload) };
    default:
      return state;
  }
}

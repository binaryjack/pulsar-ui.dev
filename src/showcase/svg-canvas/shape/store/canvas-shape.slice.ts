/** Shape slice — reducer, actions, initial state. */

import type { IStoreAction } from '@pulsar-framework/pulsar.dev';
import type { IShape } from '../model/i-shape';

// ── State ─────────────────────────────────────────────────────────────────────

export interface IShapeSliceState {
  items: IShape[];
}

export const shapeInitialState: IShapeSliceState = { items: [] };

// ── Actions ───────────────────────────────────────────────────────────────────

export type IShapeAction =
  | { type: 'SHAPES/SET'; payload: IShape[] }
  | { type: 'SHAPES/ADD'; payload: IShape }
  | { type: 'SHAPES/UPDATE'; payload: IShape }
  | { type: 'SHAPES/REMOVE'; payload: string }; // shape id

// ── Reducer ───────────────────────────────────────────────────────────────────

export function shapeReducer(state: IShapeSliceState, action: IStoreAction): IShapeSliceState {
  const a = action as IShapeAction;
  switch (a.type) {
    case 'SHAPES/SET':
      return { items: a.payload };
    case 'SHAPES/ADD':
      return { items: [...state.items, a.payload] };
    case 'SHAPES/UPDATE':
      return { items: state.items.map((s) => (s.id === a.payload.id ? a.payload : s)) };
    case 'SHAPES/REMOVE':
      return { items: state.items.filter((s) => s.id !== a.payload) };
    default:
      return state;
  }
}

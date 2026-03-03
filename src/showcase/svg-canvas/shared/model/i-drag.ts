/** Drag interaction state types, anchor hit, and canvas-wide constants — shared. */

import type { ILineConnection } from '../../line/model/i-canvas-line';
import type { AnchorPosition } from './i-entity';

// ── Constants ─────────────────────────────────────────────────────────────────

export const MIN_SIZE     = 40;
export const SNAP_RADIUS  = 14;
export const CARD_HEADER_H = 32;

/** Anchor positions that act as resize handles (vertices). */
export const VERTEX_ANCHORS = new Set<AnchorPosition>([
  'top-left'     as AnchorPosition,
  'top-right'    as AnchorPosition,
  'bottom-left'  as AnchorPosition,
  'bottom-right' as AnchorPosition,
]);

// ── Anchor hit ────────────────────────────────────────────────────────────────

export type AnchorHit = { x: number; y: number; conn: ILineConnection };

// ── Drag state union ──────────────────────────────────────────────────────────

export interface ILineDragState {
  type:    'line';
  lineId:  string;
  mouseX:  number;
  mouseY:  number;
  origX1:  number;
  origY1:  number;
  origX2:  number;
  origY2:  number;
  latestDx: number;
  latestDy: number;
}

export interface IShapeDragState {
  type:    'shape';
  shapeId: string;
  mouseX:  number;
  mouseY:  number;
  origX:   number;
  origY:   number;
  latestDx: number;
  latestDy: number;
}

export interface IAnchorResizeDragState {
  type:      'anchor-resize';
  shapeId:   string;
  anchorPos: AnchorPosition;
  mouseX:    number;
  mouseY:    number;
  origX:     number;
  origY:     number;
  origW:     number;
  origH:     number;
  latestX:   number;
  latestY:   number;
  latestW:   number;
  latestH:   number;
}

export interface ILineEndpointDragState {
  type:     'line-endpoint';
  lineId:   string;
  endpoint: 'start' | 'end';
  mouseX:   number;
  mouseY:   number;
  fixedX:   number;
  fixedY:   number;
  origX:    number;
  origY:    number;
  latestX:  number;
  latestY:  number;
}

export type IDragState =
  | ILineDragState
  | IShapeDragState
  | IAnchorResizeDragState
  | ILineEndpointDragState;

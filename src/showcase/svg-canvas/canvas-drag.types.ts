/**
 * Drag interaction state types, AnchorHit, and canvas-wide constants.
 * Extracted so components and helpers can import without circular deps.
 */

import { AnchorPosition } from './canvas-entity.types';
import type { ILineConnection } from './canvas-shape.types';

// ---------------------------------------------------------------------------
// Drag states (discriminated union)
// ---------------------------------------------------------------------------

export interface ILineDragState {
  type: 'line';
  lineId: string;
  mouseX: number;
  mouseY: number;
  origX1: number;
  origY1: number;
  origX2: number;
  origY2: number;
  latestDx: number;
  latestDy: number;
}

export interface IShapeDragState {
  type: 'shape';
  shapeId: string;
  mouseX: number;
  mouseY: number;
  origX: number;
  origY: number;
  latestDx: number;
  latestDy: number;
}

export interface IAnchorResizeDragState {
  type: 'anchor-resize';
  shapeId: string;
  anchorPos: AnchorPosition;
  mouseX: number;
  mouseY: number;
  origX: number;
  origY: number;
  origW: number;
  origH: number;
  latestX: number;
  latestY: number;
  latestW: number;
  latestH: number;
}

/** Drag a single endpoint of a line (x1/y1 or x2/y2) independently. */
export interface ILineEndpointDragState {
  type: 'line-endpoint';
  lineId: string;
  endpoint: 'start' | 'end';
  mouseX: number;
  mouseY: number;
  /** Fixed endpoint (the one NOT being dragged) */
  fixedX: number;
  fixedY: number;
  /** Current moving endpoint */
  origX: number;
  origY: number;
  latestX: number;
  latestY: number;
}

export type IDragState =
  | ILineDragState
  | IShapeDragState
  | IAnchorResizeDragState
  | ILineEndpointDragState;

// ---------------------------------------------------------------------------
// Anchor hit (used by snap helpers)
// ---------------------------------------------------------------------------

export type AnchorHit = { x: number; y: number; conn: ILineConnection };

// ---------------------------------------------------------------------------
// Canvas constants
// ---------------------------------------------------------------------------

export const SNAP_RADIUS = 15;
export const MIN_SIZE = 20;

/** Height in px of the entity card header row */
export const CARD_HEADER_H = 32;

/** Anchor positions that act as resize handles (corners of bounding box) */
export const VERTEX_ANCHORS = new Set<AnchorPosition>([
  AnchorPosition.TopLeft,
  AnchorPosition.TopRight,
  AnchorPosition.BottomLeft,
  AnchorPosition.BottomRight,
]);

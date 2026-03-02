/** Shape and line types for the SVG canvas */

import type { AnchorPosition, ICardinality, IEntity } from './canvas-entity.types';

// ---------------------------------------------------------------------------
// Shape kind
// ---------------------------------------------------------------------------

export enum ShapeKind {
  Square = 'square',
  Rectangle = 'rectangle',
  Diamond = 'diamond',
}

// ---------------------------------------------------------------------------
// Tool kind  (what the user has selected in the toolbox)
// ---------------------------------------------------------------------------

export type ToolKind = 'line' | ShapeKind;

// ---------------------------------------------------------------------------
// Anchor
// ---------------------------------------------------------------------------

export interface IAnchor {
  id: string;
  position: AnchorPosition;
  /** Absolute SVG x coordinate */
  x: number;
  /** Absolute SVG y coordinate */
  y: number;
  /** ID of the parent IShape entity */
  entityId: string;
}

// ---------------------------------------------------------------------------
// Shape  (extends IEntity with geometry + anchors)
// ---------------------------------------------------------------------------

export interface IShape extends IEntity {
  kind: ShapeKind;
  x: number;
  y: number;
  width: number;
  height: number;
  anchors: IAnchor[];
}

// ---------------------------------------------------------------------------
// Canvas line  (extends IEntity with endpoints + cardinalities)
// ---------------------------------------------------------------------------

export interface ICanvasLine extends IEntity {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  /** Cardinality at the start endpoint (left side) — null until bound */
  leftCardinality: ICardinality | null;
  /** Cardinality at the end endpoint (right side) — null until bound */
  rightCardinality: ICardinality | null;
}

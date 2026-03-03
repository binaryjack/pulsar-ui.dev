/** IShape, IAnchor, ShapeKind — shape feature slice model. */

import type { AnchorPosition, IEntity } from '../../shared/model/i-entity';

// ── Shape kind ────────────────────────────────────────────────────────────────

export enum ShapeKind {
  Square = 'square',
  Rectangle = 'rectangle',
  Diamond = 'diamond',
}

// ── Anchor ────────────────────────────────────────────────────────────────────

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

// ── Shape ─────────────────────────────────────────────────────────────────────

export interface IShape extends IEntity {
  kind: ShapeKind;
  x: number;
  y: number;
  width: number;
  height: number;
  anchors: IAnchor[];
  /** Whether the entity card body is collapsed (header-only view) */
  collapsed: boolean;
}

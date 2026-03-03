/** ICanvasLine and connection types — line feature slice model. */

import type { ICardinality, IEntity } from '../../shared/model/i-entity';

// ── Line connection ───────────────────────────────────────────────────────────

export interface ILineConnection {
  shapeId: string;
  anchorId: string;
}

// ── Canvas line ───────────────────────────────────────────────────────────────

export interface ICanvasLine extends IEntity {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  /** Cardinality at the start endpoint — null until bound */
  leftCardinality: ICardinality | null;
  /** Cardinality at the end endpoint — null until bound */
  rightCardinality: ICardinality | null;
  /** Which anchor the start endpoint is connected to — null if free */
  startConnection: ILineConnection | null;
  /** Which anchor the end endpoint is connected to — null if free */
  endConnection: ILineConnection | null;
}

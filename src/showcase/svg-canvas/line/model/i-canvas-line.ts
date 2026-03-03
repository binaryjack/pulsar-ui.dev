/** ICanvasLine and connection types — line feature slice model. */

import type { ICardinality, IEntity } from '../../shared/model/i-entity';

// ── Line mode ─────────────────────────────────────────────────────────────────

export type LineMode = 'linear' | 'orthogonal';

// ── Waypoint ─────────────────────────────────────────────────────────────────

export interface IWaypoint {
  x: number;
  y: number;
}

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
  /** Routing mode: straight line or axis-aligned orthogonal segments */
  mode: LineMode;
  /** Computed orthogonal waypoints — empty for linear mode */
  waypoints: IWaypoint[];
  /** Cardinality at the start endpoint — null until bound */
  leftCardinality: ICardinality | null;
  /** Cardinality at the end endpoint — null until bound */
  rightCardinality: ICardinality | null;
  /** Which anchor the start endpoint is connected to — null if free */
  startConnection: ILineConnection | null;
  /** Which anchor the end endpoint is connected to — null if free */
  endConnection: ILineConnection | null;
}

/** Core entity domain types — shared across all canvas feature slices. */

// ── Data types ────────────────────────────────────────────────────────────────

export enum DataType {
  String  = 'string',
  Number  = 'number',
  Boolean = 'boolean',
  Date    = 'date',
  Object  = 'object',
  Array   = 'array',
}

export interface IValidation {
  required?:  boolean;
  minLength?: number;
  maxLength?: number;
  min?:       number;
  max?:       number;
  pattern?:   string;
}

// ── Property ──────────────────────────────────────────────────────────────────

export interface IProperty {
  id:         string;
  name:       string;
  dataType:   DataType;
  validation: IValidation;
}

// ── Entity (base interface) ───────────────────────────────────────────────────

export interface IEntity {
  id:         string;
  code:       string;
  /** User-editable display label */
  name:       string;
  properties: IProperty[];
}

// ── Cardinality / Constraint ──────────────────────────────────────────────────

export enum ConstraintEnum {
  One  = '1',
  Zero = '0',
  Many = 'N',
}

export interface ICardinality {
  id:         string;
  entity:     IEntity;
  /** Anchor id or field identifier the cardinality is attached to */
  on:         string;
  constraint: ConstraintEnum;
}

// ── Anchor positions (8-point scheme) ────────────────────────────────────────

export enum AnchorPosition {
  // Vertices
  TopLeft     = 'top-left',
  TopRight    = 'top-right',
  BottomLeft  = 'bottom-left',
  BottomRight = 'bottom-right',
  // Edge midpoints
  TopCenter    = 'top-center',
  RightCenter  = 'right-center',
  BottomCenter = 'bottom-center',
  LeftCenter   = 'left-center',
}

/** Public API for the canvas entity layer */

export { AnchorPosition, ConstraintEnum, DataType } from '../canvas-entity.types';
export type { ICardinality, IEntity, IProperty, IValidation } from '../canvas-entity.types';

export { ShapeKind } from '../canvas-shape.types';
export type { IAnchor, ICanvasLine, ILineConnection, IShape, ToolKind } from '../canvas-shape.types';

export { CanvasDiamond, buildDiamondAnchors } from './canvas-diamond';
export { CanvasEntity } from './canvas-entity';
export { CanvasLine } from './canvas-line';
export { CanvasRectangle } from './canvas-rectangle';
export { CanvasSquare, buildSquareAnchors } from './canvas-square';

export {
  createCanvasLine,
  createDiamond,
  createRectangle,
  createShape,
  createSquare,
  nextId,
  resetIdSequence,
} from './create-canvas-entity';

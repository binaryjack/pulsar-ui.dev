/** Modal state types for the SVG canvas settings overlay */

export type ICanvasModalKind = 'shape' | 'line' | 'property';

export interface ICanvasModalState {
  kind: ICanvasModalKind;
  id: string;
  name: string;
  propId?: string;
}

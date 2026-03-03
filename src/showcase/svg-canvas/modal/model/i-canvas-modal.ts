/** Modal state types — modal feature slice model. */

export type ICanvasModalKind = 'shape' | 'line' | 'property';

export interface ICanvasModalState {
  kind: ICanvasModalKind;
  id: string;
  name: string;
  propId?: string;
}

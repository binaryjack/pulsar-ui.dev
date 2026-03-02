/**
 * CanvasEntity — base prototype constructor implementing IEntity.
 * All canvas items (shapes, lines) extend this.
 */

import type { IEntity, IProperty } from '../canvas-entity.types';

export const CanvasEntity = function (this: IEntity, id: string, code: string, name: string): void {
  this.id = id;
  this.code = code;
  this.name = name;

  // Non-enumerable backing array — user-defined properties
  Object.defineProperty(this, 'properties', {
    value: [] as IProperty[],
    writable: true,
    enumerable: true,
    configurable: true,
  });
} as unknown as new (id: string, code: string, name: string) => IEntity;

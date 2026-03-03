/**
 * CanvasEntity — base prototype constructor implementing IEntity.
 * All canvas items (shapes, lines) extend this.
 */

import type { IEntity, IProperty } from '../../shared/model/i-entity';

export const CanvasEntity = function (this: IEntity, id: string, code: string, name: string): void {
  this.id = id;
  this.code = code;
  this.name = name;

  Object.defineProperty(this, 'properties', {
    value: [] as IProperty[],
    writable: true,
    enumerable: true,
    configurable: true,
  });
} as unknown as new (id: string, code: string, name: string) => IEntity;

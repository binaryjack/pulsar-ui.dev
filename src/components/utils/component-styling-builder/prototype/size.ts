/**
 * Size styling prototype method
 */

import { type IComponentStylingBuilder } from '../component-styling-builder.type'

export const size = function (this: IComponentStylingBuilder, sizeValue: string): IComponentStylingBuilder {
  this.styling = { ...this.styling, size: sizeValue }
  return this
}

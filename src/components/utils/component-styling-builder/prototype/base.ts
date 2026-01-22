/**
 * Base styling prototype method
 */

import { type IComponentStylingBuilder } from '../component-styling-builder.type'

export const base = function (this: IComponentStylingBuilder, baseValue: string): IComponentStylingBuilder {
  this.styling = { ...this.styling, base: baseValue }
  return this
}

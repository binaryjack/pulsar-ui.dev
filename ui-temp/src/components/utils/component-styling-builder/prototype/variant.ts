/**
 * Variant styling prototype method
 */

import { type IComponentStylingBuilder } from '../component-styling-builder.type'

export const variant = function (this: IComponentStylingBuilder, variantValue: string): IComponentStylingBuilder {
  this.styling = { ...this.styling, variant: variantValue }
  return this
}

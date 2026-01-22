/**
 * Border styling prototype method
 */

import { type IComponentStylingBuilder } from '../component-styling-builder.type'

export const border = function (this: IComponentStylingBuilder, borderValue: string): IComponentStylingBuilder {
  this.styling = { ...this.styling, border: borderValue }
  return this
}

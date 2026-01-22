/**
 * Rounded styling prototype method
 */

import { type IComponentStylingBuilder } from '../component-styling-builder.type'

export const rounded = function (this: IComponentStylingBuilder, roundedValue: string): IComponentStylingBuilder {
  this.styling = { ...this.styling, rounded: roundedValue }
  return this
}

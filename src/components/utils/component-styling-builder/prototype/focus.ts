/**
 * Focus styling prototype method
 */

import { type IComponentStylingBuilder } from '../component-styling-builder.type'

export const focus = function (this: IComponentStylingBuilder, focusValue: string): IComponentStylingBuilder {
  this.styling = { ...this.styling, focus: focusValue }
  return this
}

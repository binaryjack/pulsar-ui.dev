/**
 * Disabled styling prototype method
 */

import { type IComponentStylingBuilder } from '../component-styling-builder.type'

export const disabled = function (this: IComponentStylingBuilder, disabledValue: string): IComponentStylingBuilder {
  this.styling = { ...this.styling, disabled: disabledValue }
  return this
}

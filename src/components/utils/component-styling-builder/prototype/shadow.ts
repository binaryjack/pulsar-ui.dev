/**
 * Shadow styling prototype method
 */

import { type IComponentStylingBuilder } from '../component-styling-builder.type'

export const shadow = function (this: IComponentStylingBuilder, shadowValue: string): IComponentStylingBuilder {
  this.styling = { ...this.styling, shadow: shadowValue }
  return this
}

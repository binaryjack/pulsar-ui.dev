/**
 * Background styling prototype method
 */

import { type IComponentStylingBuilder } from '../component-styling-builder.type'

export const background = function (this: IComponentStylingBuilder, backgroundValue: string): IComponentStylingBuilder {
  this.styling = { ...this.styling, background: backgroundValue }
  return this
}

/**
 * Hover styling prototype method
 */

import { type IComponentStylingBuilder } from '../component-styling-builder.type'

export const hover = function (this: IComponentStylingBuilder, hoverValue: string): IComponentStylingBuilder {
  this.styling = { ...this.styling, hover: hoverValue }
  return this
}

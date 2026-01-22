/**
 * Custom styling prototype method
 */

import { type IComponentStylingBuilder } from '../component-styling-builder.type'

export const custom = function (this: IComponentStylingBuilder, customValue: string): IComponentStylingBuilder {
  this.styling = { ...this.styling, custom: customValue }
  return this
}

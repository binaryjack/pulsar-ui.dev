/**
 * Active styling prototype method
 */

import { type IComponentStylingBuilder } from '../component-styling-builder.type'

export const active = function (this: IComponentStylingBuilder, activeValue: string): IComponentStylingBuilder {
  this.styling = { ...this.styling, active: activeValue }
  return this
}

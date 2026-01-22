/**
 * Focus prototype method for ComponentConfigBuilder
 */

import { type IComponentConfigBuilder } from '../component-config-builder.type'

export const focus = function (this: IComponentConfigBuilder, focusValue?: boolean): IComponentConfigBuilder {
  this.config = { ...this.config, focus: focusValue }
  return this
}

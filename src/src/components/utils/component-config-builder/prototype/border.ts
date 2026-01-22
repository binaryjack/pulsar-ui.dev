/**
 * Border prototype method for ComponentConfigBuilder
 */

import { type IComponentConfigBuilder } from '../component-config-builder.type'

export const border = function (this: IComponentConfigBuilder, borderValue?: boolean): IComponentConfigBuilder {
  this.config = { ...this.config, border: borderValue }
  return this
}

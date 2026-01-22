/**
 * Active prototype method for ComponentConfigBuilder
 */

import { type IComponentConfigBuilder } from '../component-config-builder.type'

export const active = function (this: IComponentConfigBuilder, activeValue?: boolean): IComponentConfigBuilder {
  this.config = { ...this.config, active: activeValue }
  return this
}

/**
 * Shadow prototype method for ComponentConfigBuilder
 */

import { type ComponentShadowSize } from '@pulsar/design-tokens'
import { type IComponentConfigBuilder } from '../component-config-builder.type'

export const shadow = function (this: IComponentConfigBuilder, shadowValue?: ComponentShadowSize): IComponentConfigBuilder {
  this.config = { ...this.config, shadow: shadowValue }
  return this
}

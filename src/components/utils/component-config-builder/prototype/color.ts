/**
 * Color prototype method for ComponentConfigBuilder
 */

import { type ComponentColor } from '@pulsar-framework/design-tokens'
import { type IComponentConfigBuilder } from '../component-config-builder.type'

export const color = function (this: IComponentConfigBuilder, colorValue?: ComponentColor): IComponentConfigBuilder {
  this.config = { ...this.config, color: colorValue }
  return this
}

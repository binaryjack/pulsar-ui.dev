/**
 * Size prototype method for ComponentConfigBuilder
 */

import { type ComponentSize } from '@pulsar/design-tokens'
import { type IComponentConfigBuilder } from '../component-config-builder.type'

export const size = function (this: IComponentConfigBuilder, sizeValue?: ComponentSize): IComponentConfigBuilder {
  this.config = { ...this.config, size: sizeValue }
  return this
}

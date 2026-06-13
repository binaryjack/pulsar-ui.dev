/**
 * Rounded prototype method for ComponentConfigBuilder
 */

import { type ComponentRoundedSize } from '@synetics/design-tokens'
import { type IComponentConfigBuilder } from '../component-config-builder.type'

export const rounded = function (this: IComponentConfigBuilder, roundedValue?: ComponentRoundedSize): IComponentConfigBuilder {
  this.config = { ...this.config, rounded: roundedValue }
  return this
}

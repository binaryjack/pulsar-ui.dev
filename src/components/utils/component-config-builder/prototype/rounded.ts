/**
 * Rounded prototype method for ComponentConfigBuilder
 */

import { type ComponentRoundedSize } from '../../../../design/sizes/component-rounded-size.type'
import { type IComponentConfigBuilder } from '../component-config-builder.type'

export const rounded = function (this: IComponentConfigBuilder, roundedValue?: ComponentRoundedSize): IComponentConfigBuilder {
  this.config = { ...this.config, rounded: roundedValue }
  return this
}

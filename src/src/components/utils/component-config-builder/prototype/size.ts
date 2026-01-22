/**
 * Size prototype method for ComponentConfigBuilder
 */

import { type ComponentSize } from '../../../../design/sizes/component-size.type'
import { type IComponentConfigBuilder } from '../component-config-builder.type'

export const size = function (this: IComponentConfigBuilder, sizeValue?: ComponentSize): IComponentConfigBuilder {
  this.config = { ...this.config, size: sizeValue }
  return this
}

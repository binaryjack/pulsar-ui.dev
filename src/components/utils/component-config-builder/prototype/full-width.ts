/**
 * FullWidth prototype method for ComponentConfigBuilder
 */

import { type IComponentConfigBuilder } from '../component-config-builder.type'

export const fullWidth = function (this: IComponentConfigBuilder, fullWidthValue?: boolean): IComponentConfigBuilder {
  this.config = { ...this.config, fullWidth: fullWidthValue }
  return this
}

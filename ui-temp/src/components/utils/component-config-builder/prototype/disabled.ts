/**
 * Disabled prototype method for ComponentConfigBuilder
 */

import { type IComponentConfigBuilder } from '../component-config-builder.type'

export const disabled = function (this: IComponentConfigBuilder, disabledValue?: boolean): IComponentConfigBuilder {
  this.config = { ...this.config, disabled: disabledValue }
  return this
}

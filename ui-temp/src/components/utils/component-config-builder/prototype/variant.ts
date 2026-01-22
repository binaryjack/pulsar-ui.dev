/**
 * Variant prototype method for ComponentConfigBuilder
 */

import { type ComponentVariant } from '../../../../design/variants/component-variant.type'
import { type IComponentConfigBuilder } from '../component-config-builder.type'

export const variant = function (this: IComponentConfigBuilder, variantValue: ComponentVariant): IComponentConfigBuilder {
  this.config = { ...this.config, variant: variantValue }
  return this
}

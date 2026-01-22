/**
 * Hover prototype method for ComponentConfigBuilder
 */

import { type IComponentConfigBuilder } from '../component-config-builder.type'

export const hover = function (this: IComponentConfigBuilder, hoverValue?: boolean): IComponentConfigBuilder {
  this.config = { ...this.config, hover: hoverValue }
  return this
}

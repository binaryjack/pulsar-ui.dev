/**
 * Build prototype method for ComponentConfigBuilder
 */

import { type IComponentConfigBuilder } from '../component-config-builder.type'
import { type IComponentConfig } from '../component-config.type'

export const build = function (this: IComponentConfigBuilder): IComponentConfig {
  return { ...this.config }
}

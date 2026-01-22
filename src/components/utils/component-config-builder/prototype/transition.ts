/**
 * Transition prototype method for ComponentConfigBuilder
 */

import { type IComponentConfigBuilder } from '../component-config-builder.type'

export const transition = function (this: IComponentConfigBuilder, transitionValue?: boolean): IComponentConfigBuilder {
  this.config = { ...this.config, transition: transitionValue }
  return this
}

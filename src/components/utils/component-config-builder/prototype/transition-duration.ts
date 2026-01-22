/**
 * TransitionDuration prototype method for ComponentConfigBuilder
 */

import { type TransitionDuration } from '../../../../design/tokens/legacy/transition-duration.type'
import { type IComponentConfigBuilder } from '../component-config-builder.type'

export const transitionDuration = function (this: IComponentConfigBuilder, durationValue?: TransitionDuration): IComponentConfigBuilder {
  this.config = { ...this.config, transitionDuration: durationValue }
  return this
}

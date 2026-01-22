/**
 * Set transition duration
 */

import { type IComponentConfigInternal } from '../component-config-internal.interface'

export const transitionDuration = function(
  this: IComponentConfigInternal,
  value: 'fast' | 'normal' | 'slow'
): IComponentConfigInternal {
  (this as {transitionDuration: 'fast' | 'normal' | 'slow'}).transitionDuration = value
  return this
}

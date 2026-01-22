/**
 * Set transition
 */

import { type IComponentConfigInternal } from '../component-config-internal.interface'

export const transition = function(
  this: IComponentConfigInternal,
  value: boolean = true
): IComponentConfigInternal {
  (this as {transition: boolean}).transition = value
  return this
}

/**
 * Set active
 */

import { type IComponentConfigInternal } from '../component-config-internal.interface'

export const active = function(
  this: IComponentConfigInternal,
  value: boolean = true
): IComponentConfigInternal {
  (this as {active: boolean}).active = value
  return this
}

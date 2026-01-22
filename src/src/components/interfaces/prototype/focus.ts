/**
 * Set focus
 */

import { type IComponentConfigInternal } from '../component-config-internal.interface'

export const focus = function(
  this: IComponentConfigInternal,
  value: boolean = true
): IComponentConfigInternal {
  (this as {focus: boolean}).focus = value
  return this
}

/**
 * Set disabled
 */

import { type IComponentConfigInternal } from '../component-config-internal.interface'

export const disabled = function(
  this: IComponentConfigInternal,
  value: boolean = true
): IComponentConfigInternal {
  (this as {disabled: boolean}).disabled = value
  return this
}

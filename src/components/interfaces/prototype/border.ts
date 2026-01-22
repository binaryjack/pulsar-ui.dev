/**
 * Set border
 */

import { type IComponentConfigInternal } from '../component-config-internal.interface'

export const border = function(
  this: IComponentConfigInternal,
  value: boolean
): IComponentConfigInternal {
  (this as {border: boolean}).border = value
  return this
}

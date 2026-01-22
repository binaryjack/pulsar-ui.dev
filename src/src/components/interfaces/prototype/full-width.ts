/**
 * Set fullWidth
 */

import { type IComponentConfigInternal } from '../component-config-internal.interface'

export const fullWidth = function(
  this: IComponentConfigInternal,
  value: boolean = true
): IComponentConfigInternal {
  (this as {fullWidth: boolean}).fullWidth = value
  return this
}

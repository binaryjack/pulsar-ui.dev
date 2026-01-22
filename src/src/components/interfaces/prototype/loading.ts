/**
 * Set loading
 */

import { type IComponentConfigInternal } from '../component-config-internal.interface'

export const loading = function(
  this: IComponentConfigInternal,
  value: boolean = true
): IComponentConfigInternal {
  (this as {loading: boolean}).loading = value
  return this
}

/**
 * Set hover
 */

import { type IComponentConfigInternal } from '../component-config-internal.interface'

export const hover = function(
  this: IComponentConfigInternal,
  value: boolean = true
): IComponentConfigInternal {
  (this as {hover: boolean}).hover = value
  return this
}

/**
 * Set rounded
 */

import { type IComponentConfigInternal } from '../component-config-internal.interface'

export const rounded = function(
  this: IComponentConfigInternal,
  value: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
): IComponentConfigInternal {
  (this as {rounded: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'}).rounded = value
  return this
}

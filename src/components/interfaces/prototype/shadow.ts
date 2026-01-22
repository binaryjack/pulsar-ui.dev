/**
 * Set shadow
 */

import { type IComponentConfigInternal } from '../component-config-internal.interface'

export const shadow = function(
  this: IComponentConfigInternal,
  value: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
): IComponentConfigInternal {
  (this as {shadow: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'}).shadow = value
  return this
}

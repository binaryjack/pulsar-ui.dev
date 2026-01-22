/**
 * Set className
 */

import { type IComponentConfigInternal } from '../component-config-internal.interface'

export const className = function(
  this: IComponentConfigInternal,
  value: string
): IComponentConfigInternal {
  (this as {className: string}).className = value
  return this
}

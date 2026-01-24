/**
 * Set size
 */

import { type ComponentSize } from '@pulsar/design-tokens'
import { type IComponentConfigInternal } from '../component-config-internal.interface'

export const size = function(
  this: IComponentConfigInternal,
  value: ComponentSize
): IComponentConfigInternal {
  (this as {size: ComponentSize}).size = value
  return this
}

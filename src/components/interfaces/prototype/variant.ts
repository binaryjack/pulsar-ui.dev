/**
 * Set variant
 */

import { type ComponentVariant } from '@pulsar-framework/design-tokens'
import { type IComponentConfigInternal } from '../component-config-internal.interface'

export const variant = function(
  this: IComponentConfigInternal,
  value: ComponentVariant
): IComponentConfigInternal {
  (this as {variant: ComponentVariant}).variant = value
  return this
}

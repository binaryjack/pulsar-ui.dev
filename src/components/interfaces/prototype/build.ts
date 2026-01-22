/**
 * Build final configuration
 */

import { type IComponentConfigInternal } from '../component-config-internal.interface'
import { type IComponentConfig } from '../component-config.interface'

export const build = function(
  this: IComponentConfigInternal
): IComponentConfig {
  (this as {_built: boolean})._built = true
  
  // Return a readonly copy
  return {
    variant: this.variant,
    color: this.color,
    size: this.size,
    rounded: this.rounded,
    border: this.border,
    shadow: this.shadow,
    disabled: this.disabled,
    loading: this.loading,
    fullWidth: this.fullWidth,
    transition: this.transition,
    transitionDuration: this.transitionDuration,
    hover: this.hover,
    focus: this.focus,
    active: this.active,
    className: this.className
  }
}

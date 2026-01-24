/**
 * Component Configuration Builder
 * Prototype-based builder for creating component configurations
 * 
 * Usage:
 * const config = new ComponentConfig('primary').size('sm').shadow('md').build()
 */

import { type ComponentColor } from '@pulsar/design-tokens'
import { type IComponentConfigInternal } from './component-config-internal.interface'

/**
 * ComponentConfig constructor
 */
export const ComponentConfig = function(
  this: IComponentConfigInternal,
  color: ComponentColor = 'primary'
) {
  // Set defaults
  Object.defineProperty(this, 'variant', {
    value: 'solid',
    writable: true,
    enumerable: true
  })
  
  Object.defineProperty(this, 'color', {
    value: color,
    writable: true,
    enumerable: true
  })
  
  Object.defineProperty(this, 'size', {
    value: 'md',
    writable: true,
    enumerable: true
  })
  
  Object.defineProperty(this, 'rounded', {
    value: 'md',
    writable: true,
    enumerable: true
  })
  
  Object.defineProperty(this, 'border', {
    value: true,
    writable: true,
    enumerable: true
  })
  
  Object.defineProperty(this, 'shadow', {
    value: 'sm',
    writable: true,
    enumerable: true
  })
  
  Object.defineProperty(this, 'disabled', {
    value: false,
    writable: true,
    enumerable: true
  })
  
  Object.defineProperty(this, 'loading', {
    value: false,
    writable: true,
    enumerable: true
  })
  
  Object.defineProperty(this, 'fullWidth', {
    value: false,
    writable: true,
    enumerable: true
  })
  
  Object.defineProperty(this, 'transition', {
    value: true,
    writable: true,
    enumerable: true
  })
  
  Object.defineProperty(this, 'transitionDuration', {
    value: 'normal',
    writable: true,
    enumerable: true
  })
  
  Object.defineProperty(this, 'hover', {
    value: true,
    writable: true,
    enumerable: true
  })
  
  Object.defineProperty(this, 'focus', {
    value: true,
    writable: true,
    enumerable: true
  })
  
  Object.defineProperty(this, 'active', {
    value: true,
    writable: true,
    enumerable: true
  })
  
  Object.defineProperty(this, 'className', {
    value: undefined,
    writable: true,
    enumerable: true
  })
  
  Object.defineProperty(this, '_built', {
    value: false,
    writable: true,
    enumerable: false
  })
} as unknown as { new (color?: ComponentColor): IComponentConfigInternal }


///[COPILOT] USE Object.apply()
// Attach prototype methods in separate file for organization
// We'll import and attach them here
import { active } from './prototype/active'
import { border } from './prototype/border'
import { build } from './prototype/build'
import { className } from './prototype/class-name'
import { disabled } from './prototype/disabled'
import { focus } from './prototype/focus'
import { fullWidth } from './prototype/full-width'
import { hover } from './prototype/hover'
import { loading } from './prototype/loading'
import { rounded } from './prototype/rounded'
import { shadow } from './prototype/shadow'
import { size } from './prototype/size'
import { transition } from './prototype/transition'
import { transitionDuration } from './prototype/transition-duration'
import { variant } from './prototype/variant'

ComponentConfig.prototype.variant = variant
ComponentConfig.prototype.size = size
ComponentConfig.prototype.rounded = rounded
ComponentConfig.prototype.border = border
ComponentConfig.prototype.shadow = shadow
ComponentConfig.prototype.disabled = disabled
ComponentConfig.prototype.loading = loading
ComponentConfig.prototype.fullWidth = fullWidth
ComponentConfig.prototype.transition = transition
ComponentConfig.prototype.transitionDuration = transitionDuration
ComponentConfig.prototype.hover = hover
ComponentConfig.prototype.focus = focus
ComponentConfig.prototype.active = active
ComponentConfig.prototype.className = className
ComponentConfig.prototype.build = build

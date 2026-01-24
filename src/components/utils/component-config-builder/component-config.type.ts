/**
 * Component configuration interface
 */

import { type ComponentColor, type ComponentRoundedSize, type ComponentShadowSize, type ComponentSize, type ComponentVariant, type TransitionDuration } from '@pulsar/design-tokens'

export interface IComponentConfig {
  // Visual style
  readonly color?: ComponentColor
  readonly variant?: ComponentVariant
  readonly size?: ComponentSize
  
  // Border
  readonly rounded?: ComponentRoundedSize
  readonly border?: boolean
  
  // Shadow
  readonly shadow?: ComponentShadowSize
  
  // States
  readonly disabled?: boolean
  readonly loading?: boolean
  readonly fullWidth?: boolean
  
  // Transitions
  readonly transition?: boolean
  readonly transitionDuration?: TransitionDuration
  
  // Interactive states
  readonly hover?: boolean
  readonly focus?: boolean
  readonly active?: boolean
  
  // Additional styling
  readonly className?: string
}

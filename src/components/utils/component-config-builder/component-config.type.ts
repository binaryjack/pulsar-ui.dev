/**
 * Component configuration interface
 */

import { type ComponentRoundedSize } from '@pulsar/design-tokens'
import { type ComponentShadowSize } from '@pulsar/design-tokens'
import { type ComponentSize } from '@pulsar/design-tokens'
import { type TransitionDuration } from '@pulsar/design-tokens'
import { type ComponentColor } from '@pulsar/design-tokens'
import { type ComponentVariant } from '@pulsar/design-tokens'

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

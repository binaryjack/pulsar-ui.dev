/**
 * Component configuration interface
 */

import { type ComponentRoundedSize } from '../../../design/sizes/component-rounded-size.type'
import { type ComponentShadowSize } from '../../../design/sizes/component-shadow-size.type'
import { type ComponentSize } from '../../../design/sizes/component-size.type'
import { type TransitionDuration } from '../../../design/tokens/legacy/transition-duration.type'
import { type ComponentColor } from '../../../design/variants/component-color.type'
import { type ComponentVariant } from '../../../design/variants/component-variant.type'

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

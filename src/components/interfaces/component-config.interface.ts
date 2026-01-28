/**
 * Common component configuration interface
 * Used across all components to provide consistent styling configuration
 */

import { type ComponentColor, type ComponentSize, type ComponentVariant } from '@pulsar-framework/design-tokens'

export interface IComponentConfig {
  // Visual style
  readonly variant?: ComponentVariant
  readonly color?: ComponentColor
  readonly size?: ComponentSize
  
  // Border
  readonly rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  readonly border?: boolean
  
  // Shadow
  readonly shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  
  // States
  readonly disabled?: boolean
  readonly loading?: boolean
  readonly fullWidth?: boolean
  
  // Transitions
  readonly transition?: boolean
  readonly transitionDuration?: 'fast' | 'normal' | 'slow'
  
  // Interactive states
  readonly hover?: boolean
  readonly focus?: boolean
  readonly active?: boolean
  
  // Additional styling
  readonly className?: string
}

/**
 * Default component configuration
 */
export const defaultComponentConfig: Required<Omit<IComponentConfig, 'className'>> = {
  variant: 'solid',
  color: 'primary',
  size: 'md',
  rounded: 'md',
  border: true,
  shadow: 'sm',
  disabled: false,
  loading: false,
  fullWidth: false,
  transition: true,
  transitionDuration: 'normal',
  hover: true,
  focus: true,
  active: true
}

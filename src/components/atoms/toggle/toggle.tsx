/**
 * Toggle component implementation
 * Framework: Pulsar
 */

import { cn, toggleSizeClasses } from '@pulsar-framework/design-tokens'
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder'
import { Skeleton } from '../skeleton'
import { type IToggleProps } from './toggle.type'

// External to the component so it's compiled ONCE!
const toggleDefaultConfig = new ComponentConfigBuilder('primary').size('md').rounded('full').build()

// External to the component so it's compiled ONCE!
const toggleDefaultStyling = new ComponentStylingBuilder()
  .base('relative inline-flex items-center rounded-full cursor-pointer focus:outline-none transition-colors duration-200')
  .focus('focus:ring-2 focus:ring-primary-500 focus:ring-offset-2')
  .background('bg-neutral-300 aria-checked:bg-primary-600')
  .disabled('opacity-50 cursor-not-allowed')
  .build()

/**
 * Toggle component
 * Creates an accessible toggle switch - atomic component (single element output)
 */
export const Toggle = ({
  config = toggleDefaultConfig,
  styling = toggleDefaultStyling,
  checked = false,
  ...rest
}: IToggleProps): HTMLElement => {
  if (config.loading) {
    return <Skeleton 
      width={config.size ? toggleSizeClasses[config.size].split(' ')[0] : 'w-11'} 
      height={config.size ? toggleSizeClasses[config.size].split(' ')[1] : 'h-6'} 
      rounded="full" 
    />
  }

  const button = document.createElement('button')
  button.type = 'button'
  button.setAttribute('role', 'switch')
  button.setAttribute('aria-checked', checked ? 'true' : 'false')
  button.className = cn(
    styling.base,
    styling.focus,
    styling.background,
    config.size ? toggleSizeClasses[config.size] : '',
    config.disabled ? styling.disabled : '',
    config.className,
    styling.custom
  )
  if (config.disabled) {
    button.disabled = true
  }
  button.setAttribute('aria-busy', config.loading ? 'true' : 'false')

  // Handle other props including event listeners
  Object.keys(rest).forEach((key) => {
    const value = (rest as Record<string, unknown>)[key]
    if (key.startsWith('on') && typeof value === 'function') {
      const eventName = key.toLowerCase().substring(2)
      button.addEventListener(eventName, value as EventListener)
    } else if (key.startsWith('aria') || key.startsWith('data')) {
      button.setAttribute(key.replace(/([A-Z])/g, '-$1').toLowerCase(), String(value))
    } else if (typeof value !== 'undefined' && value !== null) {
      (button as unknown as Record<string, unknown>)[key] = value
    }
  })

  return button
}

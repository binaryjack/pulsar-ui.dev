/**
 * Checkbox component implementation
 * Framework: Pulsar
 */

import { checkboxSizeClasses, cn, roundedClasses } from '@pulsar-framework/design-tokens'
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder'
import { Skeleton } from '../skeleton'
import { type ICheckboxProps } from './checkbox.type'

// External to the component so it's compiled ONCE!
const checkboxDefaultConfig = new ComponentConfigBuilder('primary').size('md').rounded('sm').build()

// External to the component so it's compiled ONCE!
const checkboxDefaultStyling = new ComponentStylingBuilder()
  .base('border cursor-pointer focus:outline-none')
  .transition('transition-colors duration-200')
  .border('border-neutral-300')
  .focus('focus:ring-2 focus:ring-primary-500 focus:border-primary-600')
  .background('bg-white checked:bg-primary-600 checked:border-primary-600')
  .disabled('bg-neutral-100 cursor-not-allowed')
  .build()
/**
 * Checkbox component
 * Creates an accessible checkbox input - atomic component (single element output)
 */
export const Checkbox = ({
  config = checkboxDefaultConfig,
  styling = checkboxDefaultStyling,
  checked,
  defaultChecked,
  ...rest
}: ICheckboxProps): HTMLElement => {
  if (config.loading) {
    return <Skeleton 
      width={config.size ? checkboxSizeClasses[config.size] : 'w-5'} 
      height={config.size ? checkboxSizeClasses[config.size].split(' ')[1] : 'h-5'} 
      rounded={config.rounded} 
    />
  }

  const input = document.createElement('input')
  input.type = 'checkbox'
  input.className = cn(
    styling.base,
    styling.transition,
    styling.border,
    styling.focus,
    styling.background,
    config.size ? checkboxSizeClasses[config.size] : '',
    config.disabled ? styling.disabled : '',
    config.rounded ? roundedClasses[config.rounded] : '',
    config.className,
    styling.custom
  )

  if (checked !== undefined) {
    input.checked = Boolean(checked)
  }
  if (defaultChecked !== undefined) {
    input.defaultChecked = Boolean(defaultChecked)
  }
  if (config.disabled) {
    input.disabled = true
  }
  input.setAttribute('aria-busy', config.loading ? 'true' : 'false')

  // Handle other props including event listeners
  Object.keys(rest).forEach((key) => {
    const value = (rest as Record<string, unknown>)[key]
    if (key.startsWith('on') && typeof value === 'function') {
      const eventName = key.toLowerCase().substring(2)
      input.addEventListener(eventName, value as EventListener)
    } else if (key.startsWith('aria') || key.startsWith('data') || key === 'role') {
      input.setAttribute(key.replace(/([A-Z])/g, '-$1').toLowerCase(), String(value))
    } else if (typeof value !== 'undefined' && value !== null) {
      (input as unknown as Record<string, unknown>)[key] = value
    }
  })

  return input
}

/**
 * Textarea component implementation
 * Framework: Pulsar
 */

import { cn, roundedClasses, textareaSizeClasses } from '@pulsar-framework/design-tokens'
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder'
import { Skeleton } from '../skeleton'
import { type ITextareaProps } from './textarea.type'

// External to the component so it's compiled ONCE!
const textareaDefaultConfig = new ComponentConfigBuilder('primary').size('md').rounded('md').build()

// External to the component so it's compiled ONCE!
const textareaDefaultStyling = new ComponentStylingBuilder()
  .base('block border font-medium focus:outline-none resize-y')
  .transition('transition-colors duration-200')
  .border('border-neutral-300')
  .focus('focus:ring-2 focus:ring-primary-500 focus:border-primary-600')
  .background('bg-white text-neutral-900')
  .readOnly('bg-neutral-50 cursor-default')
  .disabled('bg-neutral-100 text-neutral-500 cursor-not-allowed')
  .build()
/**
 * Textarea component
 * Creates an accessible textarea - atomic component (single element output)
 */
export const Textarea = ({
  config = textareaDefaultConfig,
  styling = textareaDefaultStyling,
  value,
  defaultValue,
  rows = 4,
  ...rest
}: ITextareaProps): HTMLElement => {
  if (config.loading) {
    return <Skeleton width={config.fullWidth ? 'w-full' : 'w-64'} height="h-24" rounded={config.rounded} />
  }

  const textarea = document.createElement('textarea')
  textarea.rows = rows
  textarea.className = cn(
    styling.base,
    styling.transition,
    styling.border,
    styling.focus,
    config.size ? textareaSizeClasses[config.size] : '',
    config.disabled ? styling.disabled : 'readOnly' in rest && rest.readOnly ? styling.readOnly : styling.background,
    config.rounded ? roundedClasses[config.rounded] : '',
    config.fullWidth ? 'w-full' : '',
    config.className,
    styling.custom
  )

  if (value !== undefined) {
    textarea.value = String(value)
  }
  if (defaultValue !== undefined) {
    textarea.defaultValue = String(defaultValue)
  }
  if (config.disabled) {
    textarea.disabled = true
  }
  textarea.setAttribute('aria-busy', config.loading ? 'true' : 'false')

  // Handle other props including event listeners
  Object.keys(rest).forEach((key) => {
    const value = (rest as Record<string, unknown>)[key]
    if (key.startsWith('on') && typeof value === 'function') {
      const eventName = key.toLowerCase().substring(2)
      textarea.addEventListener(eventName, value as EventListener)
    } else if (key === 'placeholder') {
      textarea.placeholder = String(value)
    } else if (key === 'readOnly') {
      textarea.readOnly = Boolean(value)
    } else if (key.startsWith('aria') || key.startsWith('data') || key === 'role') {
      textarea.setAttribute(key.replace(/([A-Z])/g, '-$1').toLowerCase(), String(value))
    } else if (typeof value !== 'undefined' && value !== null) {
      (textarea as unknown as Record<string, unknown>)[key] = value
    }
  })

  return textarea
}

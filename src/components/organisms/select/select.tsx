/**
 * Select component implementation
 * Framework: Pulsar
 * Organism: Native select with options
 */

import { cn, inputSizeClasses, roundedClasses } from '@pulsar-framework/design-tokens'
import { Skeleton } from '../../atoms/skeleton'
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder'
import { type ISelectProps } from './select.type'

// External to the component so it's compiled ONCE!
const selectDefaultConfig = new ComponentConfigBuilder('primary')
  .size('md')
  .rounded('md')
  .build()

// External to the component so it's compiled ONCE!
const selectDefaultStyling = new ComponentStylingBuilder()
  .base('block border font-medium focus:outline-none appearance-none bg-white pr-10')
  .transition('transition-colors duration-200')
  .border('border-neutral-300')
  .focus('focus:ring-2 focus:ring-primary-500 focus:border-primary-600')
  .disabled('bg-neutral-100 text-neutral-500 cursor-not-allowed')
  .build()

/**
 * Select component
 * Creates a native select element with options - organism component
 */
export const Select = ({
  config = selectDefaultConfig,
  styling = selectDefaultStyling,
  options,
  value,
  defaultValue,
  placeholder,
  onChange,
  ariaLabel,
  ...rest
}: ISelectProps): HTMLElement => {
  const select = config.loading ?
    <Skeleton width={config.fullWidth ? 'w-full' : 'w-64'} height="h-10" rounded={config.rounded} /> :
    <select
      className={cn(
        styling.base,
        styling.transition,
        styling.border,
        styling.focus,
        config.size ? inputSizeClasses[config.size] : '',
        config.disabled ? styling.disabled : '',
        config.rounded ? roundedClasses[config.rounded] : '',
        config.fullWidth ? 'w-full' : '',
        config.className,
        styling.custom
      )}
      value={value ?? defaultValue}
      disabled={config.disabled}
      title={ariaLabel || placeholder || 'Select an option'}
      onchange={(e: Event) => {
        if (onChange) {
          onChange((e.target as HTMLSelectElement).value)
        }
      }}
      {...rest}
    />
  
  if (!config.loading) {
    // Set aria attributes programmatically
    select.setAttribute('aria-label', ariaLabel || placeholder || 'Select an option')
    select.setAttribute('aria-busy', config.loading ? 'true' : 'false')
    // Manually append options to the select element
    if (placeholder) {
      const placeholderOption = document.createElement('option')
      placeholderOption.value = ''
      placeholderOption.disabled = true
      placeholderOption.textContent = placeholder
      select.appendChild(placeholderOption)
    }
    
    options.forEach((option) => {
      const optionElement = document.createElement('option')
      optionElement.value = option.value
      if (option.disabled) optionElement.disabled = true
      optionElement.textContent = option.label
      select.appendChild(optionElement)
    })
  }
  
  return select
}

/**
 * Input component implementation
 * Framework: Pulsar
 */

import { cn, inputSizeClasses, roundedClasses } from '../../../design/utility'
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder'
import { Skeleton } from '../skeleton'
import { type IInputProps } from './input.type'

// External to the component so it's compiled ONCE!
const inputDefaultConfig = new ComponentConfigBuilder('primary').size('md').rounded('md').build()

// External to the component so it's compiled ONCE!
const inputDefaultStyling = new ComponentStylingBuilder()
  .base('block border font-medium focus:outline-none')
  .transition('transition-colors duration-200')
  .border('border-neutral-300')
  .focus('focus:ring-2 focus:ring-primary-500 focus:border-primary-600')
  .background('bg-white text-neutral-900')
  .readOnly('bg-neutral-50 cursor-default')
  .disabled('bg-neutral-100 text-neutral-500 cursor-not-allowed')
  .build()
/**
 * Input component
 * Creates an accessible text input - atomic component (single element output)
 */
export const Input = ({
  config = inputDefaultConfig,
  styling = inputDefaultStyling,
  type = 'text',
  value,
  defaultValue,
  ...rest
}: IInputProps): HTMLElement => 
  config.loading ?
    <Skeleton width={config.fullWidth ? 'w-full' : 'w-64'} height="h-10" rounded={config.rounded} /> :
    <input
      type={type}
      className={cn(
        styling.base,
        styling.transition,
        styling.border,
        styling.focus,
        config.size ? inputSizeClasses[config.size] : '',
        config.disabled ? styling.disabled : 'readOnly' in rest && rest.readOnly ? styling.readOnly : styling.background,
        config.rounded ? roundedClasses[config.rounded] : '',
        config.fullWidth ? 'w-full' : '',
        config.className,
        styling.custom
      )}
      value={value}
      defaultValue={defaultValue}
      disabled={config.disabled}
      ariaBusy={config.loading ? 'true' : 'false'}
      {...rest}
    />


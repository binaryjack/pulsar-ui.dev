/**
 * Checkbox component implementation
 * Framework: Pulsar
 */

import { checkboxSizeClasses, cn, roundedClasses } from '../../../design/utility'
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
}: ICheckboxProps): HTMLElement => 
  config.loading ?
    <Skeleton 
      width={config.size ? checkboxSizeClasses[config.size] : 'w-5'} 
      height={config.size ? checkboxSizeClasses[config.size].split(' ')[1] : 'h-5'} 
      rounded={config.rounded} 
    /> :
    <input
      type="checkbox"
      className={cn(
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
      )}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={config.disabled}
      ariaBusy={config.loading ? 'true' : 'false'}
      {...rest}
    />

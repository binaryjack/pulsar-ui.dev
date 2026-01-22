/**
 * Toggle component implementation
 * Framework: Pulsar
 */

import { cn, toggleSizeClasses } from '../../../design/utility'
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
}: IToggleProps): HTMLElement => 
  config.loading ?
    <Skeleton 
      width={config.size ? toggleSizeClasses[config.size].split(' ')[0] : 'w-11'} 
      height={config.size ? toggleSizeClasses[config.size].split(' ')[1] : 'h-6'} 
      rounded="full" 
    /> :
    <button
      type="button"
      role="switch"
      ariaChecked={checked ? 'true' : 'false'}
      className={cn(
        styling.base,
        styling.focus,
        styling.background,
        config.size ? toggleSizeClasses[config.size] : '',
        config.disabled ? styling.disabled : '',
        config.className,
        styling.custom
      )}
      disabled={config.disabled}
      ariaBusy={config.loading ? 'true' : 'false'}
      {...rest}
    />

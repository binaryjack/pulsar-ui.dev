/**
 * Button component implementation
 * Framework: Pulsar
 */

import { componentSizes } from '../../../design/sizes'
import { cn, roundedClasses, shadowClasses, transitionDurationClasses } from '../../../design/utility'
import { Skeleton } from '../../atoms/skeleton'
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder'
import { type IButtonProps } from './button.type'

// External to the component so it's compiled ONCE!
const buttonDefaultConfig = new ComponentConfigBuilder('primary')
  .variant('solid')
  .size('md')
  .rounded('md')
  .transition(true)
  .build()

// External to the component so it's compiled ONCE!
const buttonDefaultStyling = new ComponentStylingBuilder()
  .base('inline-flex items-center justify-center font-medium border focus:outline-none')
  .transition('transition-colors duration-200')
  .hover('hover:opacity-90')
  .focus('focus:ring-2 focus:ring-offset-2 focus:ring-primary-500')
  .active('active:scale-95')
  .disabled('opacity-50 cursor-not-allowed')
  .build()

/**
 * Button component
 * Creates an accessible button element - atomic component (single element output)
 */
export const Button = ({
  config = buttonDefaultConfig,
  styling = buttonDefaultStyling,
  type = 'button',
  ...rest
}: IButtonProps): HTMLElement => 
  config.loading ?
    <Skeleton 
      width={config.fullWidth ? 'w-full' : 'w-32'} 
      height={config.size ? componentSizes[config.size].height : 'h-10'} 
      rounded={config.rounded} 
    /> :
    <button
      type={type}
      className={cn(
        styling.base,
        styling.transition,
        config.size ? componentSizes[config.size].padding : '',
        config.size ? componentSizes[config.size].fontSize : '',
        config.fullWidth ? 'w-full' : '',
        config.rounded ? roundedClasses[config.rounded] : '',
        config.shadow ? shadowClasses[config.shadow] : '',
        config.transitionDuration ? transitionDurationClasses[config.transitionDuration] : '',
        config.disabled ? styling.disabled : '',
        config.hover ? styling.hover : '',
        config.focus ? styling.focus : '',
        config.active ? styling.active : '',
        config.className,
        styling.custom
      )}
      disabled={config.disabled}
      ariaBusy={config.loading ? 'true' : 'false'}
      {...rest}
    />

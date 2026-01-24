/**
 * Button component implementation
 * Framework: Pulsar
 */

import { componentSizes } from '@pulsar-framework/design-tokens'
import { cn, roundedClasses, shadowClasses, transitionDurationClasses } from '@pulsar-framework/design-tokens'
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
  children,
  onclick,
  ...rest
}: IButtonProps): HTMLElement => {
  if (config.loading) {
    return <Skeleton 
      width={config.fullWidth ? 'w-full' : 'w-32'} 
      height={config.size ? componentSizes[config.size].height : 'h-10'} 
      rounded={config.rounded} 
    />
  }

  const button = document.createElement('button')
  button.type = type
  button.className = cn(
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
  )
  button.disabled = config.disabled || false
  button.setAttribute('aria-busy', config.loading ? 'true' : 'false')

  // Handle event listeners
  if (onclick) {
    button.addEventListener('click', onclick as EventListener)
  }

  // Handle other props
  Object.keys(rest).forEach((key) => {
    const value = (rest as Record<string, unknown>)[key]
    if (key.startsWith('on') && typeof value === 'function') {
      const eventName = key.toLowerCase().substring(2)
      button.addEventListener(eventName, value as EventListener)
    } else if (key.startsWith('aria') || key.startsWith('data') || key === 'role') {
      button.setAttribute(key.replace(/([A-Z])/g, '-$1').toLowerCase(), String(value))
    } else if (typeof value !== 'undefined' && value !== null) {
      (button as unknown as Record<string, unknown>)[key] = value
    }
  })

  // Add children
  if (children) {
    const childArray = Array.isArray(children) ? children : [children]
    childArray.forEach((child) => {
      if (child instanceof Node) {
        button.appendChild(child)
      } else if (typeof child === 'string' || typeof child === 'number') {
        button.appendChild(document.createTextNode(String(child)))
      }
    })
  }

  return button
}

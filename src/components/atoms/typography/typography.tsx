/**
 * Typography component implementation
 * Framework: Pulsar
 */

import { cn, typographyVariantClasses } from '@pulsar-framework/design-tokens'
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder'
import { Skeleton } from '../skeleton'
import { type ITypographyProps } from './typography.type'

// External to the component so it's compiled ONCE!
const typographyDefaultConfig = new ComponentConfigBuilder('primary').build()

// External to the component so it's compiled ONCE!
const typographyDefaultStyling = new ComponentStylingBuilder()
  .base('text-neutral-900')
  .build()

/**
 * Typography component
 * Creates a text element with variant styling - atomic component (single element output)
 */
export const Typography = ({
  config = typographyDefaultConfig,
  styling = typographyDefaultStyling,
  tag = 'span',
  variant = 'body1',
  truncate = false,
  noWrap = false,
  userSelect = true,
  children,
  ...rest
}: ITypographyProps): HTMLElement => {
  if (config.loading) {
    return <Skeleton width="w-full" height="h-6" rounded={config.rounded} />
  }

  const className = cn(
    styling.base,
    variant ? typographyVariantClasses[variant] : '',
    truncate ? 'truncate' : '',
    noWrap ? 'whitespace-nowrap' : '',
    userSelect === false ? 'select-none' : '',
    config.className,
    styling.custom
  )

  const element = document.createElement(tag)
  element.className = className
  element.setAttribute('aria-busy', 'false')
  
  // Apply rest props
  Object.keys(rest).forEach((key) => {
    const value = (rest as Record<string, unknown>)[key]
    if (key.startsWith('aria')) {
      const ariaKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      element.setAttribute(ariaKey, String(value))
    } else if (key.startsWith('data')) {
      const dataKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
      element.setAttribute(dataKey, String(value))
    } else if (key === 'role') {
      element.setAttribute('role', String(value))
    } else if (key.startsWith('on') && typeof value === 'function') {
      const eventName = key.toLowerCase().substring(2)
      element.addEventListener(eventName, value as EventListener)
    } else if (typeof value !== 'undefined' && value !== null) {
      (element as unknown as Record<string, unknown>)[key] = value
    }
  })

  // Add children
  if (children) {
    const childArray = Array.isArray(children) ? children : [children]
    childArray.forEach((child) => {
      if (child instanceof Node) {
        element.appendChild(child)
      } else if (typeof child === 'string' || typeof child === 'number') {
        element.appendChild(document.createTextNode(String(child)))
      }
    })
  }

  return element
}

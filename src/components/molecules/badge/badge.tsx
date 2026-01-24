/**
 * Badge component implementation
 * Framework: Pulsar
 * Molecule: Composes text and optional icon
 */

import { badgeSizeClasses, cn, roundedClasses } from '@pulsar-framework/design-tokens'
import { Skeleton } from '../../atoms/skeleton'
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder'
import { type IBadgeProps } from './badge.type'

// External to the component so it's compiled ONCE!
const badgeDefaultConfig = new ComponentConfigBuilder('primary')
  .variant('solid')
  .size('sm')
  .rounded('md')
  .build()

// External to the component so it's compiled ONCE!
const badgeDefaultStyling = new ComponentStylingBuilder()
  .base('inline-flex items-center gap-1 font-medium')
  .background('bg-primary-100 text-primary-800')
  .border('border border-primary-200')
  .build()

/**
 * Badge component
 * Creates a badge with optional icon - molecule component (can contain multiple elements)
 */
export const Badge = ({
  config = badgeDefaultConfig,
  styling = badgeDefaultStyling,
  label,
  icon,
  iconPosition = 'left',
  dot = false,
  children,
  ...rest
}: IBadgeProps): HTMLElement => {
  if (config.loading) {
    return <Skeleton width="w-16" height="h-6" rounded={config.rounded} />
  }

  const span = document.createElement('span')
  span.className = cn(
    styling.base,
    styling.background,
    styling.border,
    config.size ? badgeSizeClasses[config.size] : '',
    config.rounded ? roundedClasses[config.rounded] : '',
    config.className,
    styling.custom
  )
  span.setAttribute('aria-busy', config.loading ? 'true' : 'false')

  // Handle other props
  Object.keys(rest).forEach((key) => {
    const value = (rest as Record<string, unknown>)[key]
    if (key.startsWith('on') && typeof value === 'function') {
      const eventName = key.toLowerCase().substring(2)
      span.addEventListener(eventName, value as EventListener)
    } else if (key.startsWith('aria') || key.startsWith('data') || key === 'role') {
      span.setAttribute(key.replace(/([A-Z])/g, '-$1').toLowerCase(), String(value))
    } else if (typeof value !== 'undefined' && value !== null) {
      (span as unknown as Record<string, unknown>)[key] = value
    }
  })

  // Add dot
  if (dot) {
    const dotSpan = document.createElement('span')
    dotSpan.className = 'w-1.5 h-1.5 rounded-full bg-current'
    span.appendChild(dotSpan)
  }

  // Add icon (left)
  if (iconPosition === 'left' && icon) {
    span.appendChild(icon)
  }

  // Add content (children or label)
  const content = children || label
  if (content) {
    if (typeof content === 'string' || typeof content === 'number') {
      span.appendChild(document.createTextNode(String(content)))
    } else if (content instanceof Node) {
      span.appendChild(content)
    } else if (Array.isArray(content)) {
      content.forEach((child) => {
        if (child instanceof Node) {
          span.appendChild(child)
        } else if (typeof child === 'string' || typeof child === 'number') {
          span.appendChild(document.createTextNode(String(child)))
        }
      })
    }
  }

  // Add icon (right)
  if (iconPosition === 'right' && icon) {
    span.appendChild(icon)
  }

  return span
}

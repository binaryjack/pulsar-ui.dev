/**
 * Card component implementation
 * Framework: Pulsar
 * Organism: Card with header, body, and footer sections
 */

import { cn, roundedClasses, shadowClasses } from '@pulsar-framework/design-tokens'
import { Skeleton } from '../../atoms/skeleton'
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder'
import { type ICardProps } from './card.type'

// External to the component so it's compiled ONCE!
const cardDefaultConfig = new ComponentConfigBuilder('primary')
  .rounded('lg')
  .shadow('md')
  .build()

// External to the component so it's compiled ONCE!
const cardDefaultStyling = new ComponentStylingBuilder()
  .base('bg-white overflow-hidden')
  .border('border border-neutral-200')
  .build()

/**
 * Card component
 * Creates a card container with optional header/footer - organism component
 */
export const Card = ({
  config = cardDefaultConfig,
  styling = cardDefaultStyling,
  header,
  footer,
  elevation = true,
  bordered = true,
  children,
  ...rest
}: ICardProps): HTMLElement => {
  if (config.loading) {
    return <Skeleton width="w-full" height="h-64" rounded={config.rounded} />
  }

  const div = document.createElement('div')
  div.className = cn(
    styling.base,
    bordered ? styling.border : '',
    elevation && config.shadow ? shadowClasses[config.shadow] : '',
    config.rounded ? roundedClasses[config.rounded] : '',
    config.className,
    styling.custom
  )
  div.setAttribute('aria-busy', config.loading ? 'true' : 'false')

  // Handle other props
  Object.keys(rest).forEach((key) => {
    const value = (rest as Record<string, unknown>)[key]
    if (key.startsWith('on') && typeof value === 'function') {
      const eventName = key.toLowerCase().substring(2)
      div.addEventListener(eventName, value as EventListener)
    } else if (key.startsWith('aria') || key.startsWith('data') || key === 'role') {
      div.setAttribute(key.replace(/([A-Z])/g, '-$1').toLowerCase(), String(value))
    } else if (typeof value !== 'undefined' && value !== null) {
      (div as unknown as Record<string, unknown>)[key] = value
    }
  })

  // Add header
  if (header) {
    const headerDiv = document.createElement('div')
    headerDiv.className = 'px-6 py-4 border-b border-neutral-200'
    if (header instanceof Node) {
      headerDiv.appendChild(header)
    } else {
      headerDiv.appendChild(document.createTextNode(String(header)))
    }
    div.appendChild(headerDiv)
  }

  // Add content
  const contentDiv = document.createElement('div')
  contentDiv.className = 'px-6 py-4'
  if (children) {
    const childArray = Array.isArray(children) ? children : [children]
    childArray.forEach((child) => {
      if (child instanceof Node) {
        contentDiv.appendChild(child)
      } else if (typeof child === 'string' || typeof child === 'number') {
        contentDiv.appendChild(document.createTextNode(String(child)))
      }
    })
  }
  div.appendChild(contentDiv)

  // Add footer
  if (footer) {
    const footerDiv = document.createElement('div')
    footerDiv.className = 'px-6 py-4 border-t border-neutral-200 bg-neutral-50'
    if (footer instanceof Node) {
      footerDiv.appendChild(footer)
    } else {
      footerDiv.appendChild(document.createTextNode(String(footer)))
    }
    div.appendChild(footerDiv)
  }

  return div
}

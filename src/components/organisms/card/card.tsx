/**
 * Card component implementation
 * Framework: Pulsar
 * Organism: Card with header, body, and footer sections
 */

import { cn, roundedClasses, shadowClasses } from '../../../design/utility'
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
}: ICardProps): HTMLElement => 
  config.loading ?
    <Skeleton width="w-full" height="h-64" rounded={config.rounded} /> :
    <div
      className={cn(
        styling.base,
        bordered ? styling.border : '',
        elevation && config.shadow ? shadowClasses[config.shadow] : '',
        config.rounded ? roundedClasses[config.rounded] : '',
        config.className,
        styling.custom
      )}
      ariaBusy={config.loading ? 'true' : 'false'}
      {...rest}
    >
      {header ? (
        <div className="px-6 py-4 border-b border-neutral-200">
          {header}
        </div>
      ) : null}
      <div className="px-6 py-4">
        {children}
      </div>
      {footer ? (
        <div className="px-6 py-4 border-t border-neutral-200 bg-neutral-50">
          {footer}
        </div>
      ) : null}
    </div>

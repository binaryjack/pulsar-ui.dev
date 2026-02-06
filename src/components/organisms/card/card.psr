/**
 * Card component implementation
 * Framework: Pulsar
 * Organism: Card with header, body, and footer sections
 */

import { cn, roundedClasses, shadowClasses } from '@pulsar-framework/design-tokens';
import { Skeleton } from '../../atoms/skeleton';
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder';
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder';
import { type ICardProps } from './card.type';

// External to the component so it's compiled ONCE!
const cardDefaultConfig = new ComponentConfigBuilder('primary').rounded('xl').shadow('sm').build();

// External to the component so it's compiled ONCE!
const cardDefaultStyling = new ComponentStylingBuilder()
  .base('bg-white dark:bg-neutral-800 overflow-hidden transition-all duration-300 hover:shadow-lg')
  .border('border border-neutral-200 dark:border-neutral-700')
  .build();

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
    return <Skeleton width="w-full" height="h-64" rounded={config.rounded} />;
  }

  const className = cn(
    styling.base,
    bordered ? styling.border : '',
    elevation && config.shadow ? shadowClasses[config.shadow] : '',
    config.rounded ? roundedClasses[config.rounded] : '',
    config.className,
    styling.custom
  );

  return (
    <div className={className} ariaBusy={config.loading ? 'true' : 'false'} {...rest}>
      {header && (
        <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-700">
          {header}
        </div>
      )}
      <div className="px-6 py-4">{children}</div>
      {footer && (
        <div className="px-6 py-4 border-t border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-750">
          {footer}
        </div>
      )}
    </div>
  );
};

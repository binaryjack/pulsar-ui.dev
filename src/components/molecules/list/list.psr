/**
 * List component implementation
 * Framework: Pulsar
 * Molecule: Ordered or unordered list with spacing options
 */

import { cn } from '@pulsar-framework/design-tokens';
import { Skeleton } from '../../atoms/skeleton';
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder';
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder';
import type { IListProps } from './list.type';

// External to the component so it's compiled ONCE!
const listDefaultConfig = new ComponentConfigBuilder('primary').build();

// External to the component so it's compiled ONCE!
const listDefaultStyling = new ComponentStylingBuilder()
  .base('list-inside transition-all duration-200')
  .build();

/**
 * List component
 * Creates an ordered or unordered list - molecule component
 */
export const List = ({
  config = listDefaultConfig,
  styling = listDefaultStyling,
  ordered = false,
  spacing = 'md',
  children,
  class: className,
  ...rest
}: IListProps): HTMLElement => {
  if (config.loading) {
    return <Skeleton width="w-full" height="h-32" rounded="md" />;
  }

  const listClasses = cn(
    styling.base,
    ordered ? 'list-decimal' : 'list-disc',
    'space-y-' + spacing,
    config.className,
    styling.custom,
    className
  );

  const ListTag = ordered ? 'ol' : 'ul';

  return (
    <ListTag className={listClasses} ariaBusy={config.loading ? 'true' : 'false'} {...rest}>
      {children}
    </ListTag>
  );
};

/**
 * Table component implementation
 * Framework: Pulsar
 * Organism: Compound table component with striped and hover options
 */

import { cn } from '@pulsar-framework/design-tokens';
import { Skeleton } from '../../atoms/skeleton';
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder';
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder';
import type { ITableProps } from './table.type';

// External to the component so it's compiled ONCE!
const tableDefaultConfig = new ComponentConfigBuilder('primary').build();

// External to the component so it's compiled ONCE!
const tableDefaultStyling = new ComponentStylingBuilder()
  .base('w-full border-collapse transition-shadow duration-300')
  .border('border border-neutral-200 dark:border-neutral-700')
  .build();

/**
 * Table component
 * Creates a table with optional striping and hover effects - organism component
 */
export const Table = ({
  config = tableDefaultConfig,
  styling = tableDefaultStyling,
  striped = false,
  hoverable = false,
  responsive = false,
  children,
  class: className,
  ...rest
}: ITableProps): HTMLElement => {
  if (config.loading) {
    return <Skeleton width="w-full" height="h-96" rounded="md" />;
  }

  // Clone children to pass table context
  const enhancedChildren = children.map((child) => {
    if (child && typeof child === 'object' && 'props' in child) {
      return {
        ...child,
        props: {
          ...child.props,
          striped,
          hoverable,
        },
      };
    }
    return child;
  });

  const table = (
    <table
      className={cn(styling.base, styling.border, config.className, styling.custom, className)}
      ariaBusy={config.loading ? 'true' : 'false'}
      {...rest}
    >
      {enhancedChildren}
    </table>
  );

  if (responsive) {
    return <div className="overflow-x-auto">{table}</div>;
  }

  return table;
};

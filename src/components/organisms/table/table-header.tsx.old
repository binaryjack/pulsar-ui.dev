/**
 * TableHeader component implementation
 * Framework: Pulsar
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { ITableHeaderProps } from './table-header.type';

/**
 * TableHeader component
 * Table header section
 */
export const TableHeader = ({
  children,
  class: className,
  ...rest
}: ITableHeaderProps): HTMLElement => {
  return (
    <thead className={cn('bg-neutral-50 dark:bg-neutral-800', className)} {...rest}>
      {children}
    </thead>
  );
};

/**
 * TableRow component implementation
 * Framework: Pulsar
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { ITableRowProps } from './table-row.type';

/**
 * TableRow component
 * Table row
 */
export const TableRow = ({
  children,
  class: className,
  ...rest
}: ITableRowProps & { isEven?: boolean; striped?: boolean; hoverable?: boolean }): HTMLElement => {
  const isEven = rest.isEven;
  const striped = rest.striped;
  const hoverable = rest.hoverable;

  return (
    <tr
      className={cn(
        'border-b border-neutral-200 dark:border-neutral-700',
        striped && !isEven ? 'bg-neutral-50 dark:bg-neutral-800' : 'bg-white dark:bg-neutral-900',
        hoverable ? 'hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors' : '',
        className
      )}
      {...rest}
    >
      {children}
    </tr>
  );
};

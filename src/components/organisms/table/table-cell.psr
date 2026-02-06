/**
 * TableCell component implementation
 * Framework: Pulsar
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { ITableCellProps } from './table-cell.type';

/**
 * TableCell component
 * Table cell (th or td)
 */
export const TableCell = ({
  isHeader = false,
  children,
  class: className,
  ...rest
}: ITableCellProps): HTMLElement => {
  const CellTag = isHeader ? 'th' : 'td';

  return (
    <CellTag
      className={cn(
        'px-4 py-3 text-left',
        isHeader
          ? 'font-semibold text-neutral-900 dark:text-neutral-100'
          : 'text-neutral-700 dark:text-neutral-300',
        className
      )}
      {...rest}
    >
      {children}
    </CellTag>
  );
};

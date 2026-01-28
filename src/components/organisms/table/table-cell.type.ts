/**
 * TableCell component type definition
 */

export interface ITableCellProps {
  isHeader?: boolean;
  children: HTMLElement | string | (HTMLElement | string)[];
  class?: string;
  [key: string]: unknown;
}

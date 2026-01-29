/**
 * Grid Component - Declarative Implementation
 * CSS Grid layout using design tokens
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { IGridProps } from './grid.type';

/**
 * Grid component
 * Creates a CSS Grid layout - atomic component
 */
export const Grid = ({
  columns = 12,
  gap,
  rowGap,
  columnGap,
  templateColumns,
  templateRows,
  children,
  class: className,
  ...rest
}: IGridProps): HTMLElement => {
  const gapClasses = {
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
    '2xl': 'gap-12',
  };

  const gridClasses = cn(
    'grid transition-all duration-300',
    gap && typeof gap === 'string' && gapClasses[gap as keyof typeof gapClasses],
    className
  );

  const gridStyle = [
    templateColumns
      ? `grid-template-columns: ${templateColumns}`
      : `grid-template-columns: repeat(${columns}, 1fr)`,
    templateRows && `grid-template-rows: ${templateRows}`,
    gap && typeof gap !== 'string' && `gap: ${gap}`,
    rowGap && `row-gap: ${rowGap}`,
    columnGap && `column-gap: ${columnGap}`,
  ]
    .filter(Boolean)
    .join('; ');

  return (
    <div className={gridClasses} style={gridStyle} {...rest}>
      {children}
    </div>
  );
};

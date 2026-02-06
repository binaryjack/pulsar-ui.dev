/**
 * Divider Component - Declarative Implementation
 * Visual separator using design tokens
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { IDividerProps } from './divider.type';

/**
 * Divider component
 * Creates a visual separator - atomic component
 */
export const Divider = ({
  orientation = 'horizontal',
  thickness,
  spacing,
  className,
  ...rest
}: IDividerProps): HTMLElement => {
  const isHorizontal = orientation === 'horizontal';

  const dividerClasses = cn(
    'border-gray-300 dark:border-gray-600 transition-opacity duration-300',
    isHorizontal
      ? `border-t ${spacing || 'my-4'}`
      : `border-l ${spacing || 'mx-4'} inline-block h-full`,
    className
  );

  const style = thickness
    ? isHorizontal
      ? `border-top-width: ${thickness}`
      : `border-left-width: ${thickness}`
    : undefined;

  return (
    <hr
      className={dividerClasses}
      style={style}
      role="separator"
      aria-orientation={orientation}
      {...rest}
    />
  );
};

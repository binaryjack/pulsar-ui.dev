/**
 * ListItem component implementation
 * Framework: Pulsar
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { IListItemProps } from './list-item.type';

/**
 * ListItem component
 * Individual list item with optional icon
 */
export const ListItem = ({
  icon,
  children,
  class: className,
  ...rest
}: IListItemProps): HTMLElement => {
  if (icon) {
    return (
      <li className={cn('flex items-center gap-2', className)} {...rest}>
        <span className="flex-shrink-0">{icon}</span>
        <span className="flex-1">{children}</span>
      </li>
    );
  }

  return (
    <li className={cn(className)} {...rest}>
      {children}
    </li>
  );
};

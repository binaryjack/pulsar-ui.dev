/**
 * MenuDivider component implementation
 * Framework: Pulsar
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { IMenuDividerProps } from './menu-divider.type';

/**
 * MenuDivider component
 * Visual separator between menu items
 */
export const MenuDivider = ({ class: className, ...rest }: IMenuDividerProps): HTMLElement => {
  return (
    <div
      role="separator"
      className={cn('my-1 border-t border-neutral-200 dark:border-neutral-700', className)}
      {...rest}
    />
  );
};

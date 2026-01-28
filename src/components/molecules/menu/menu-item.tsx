/**
 * MenuItem component implementation
 * Framework: Pulsar
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { IMenuItemProps } from './menu-item.type';

/**
 * MenuItem component
 * Individual menu item with optional icon
 */
export const MenuItem = ({
  icon,
  disabled = false,
  onClick,
  children,
  class: className,
  ...rest
}: IMenuItemProps): HTMLElement => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      className={cn(
        'px-4 py-2 text-sm flex items-center gap-2',
        'focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-700',
        disabled
          ? 'text-neutral-400 dark:text-neutral-600 cursor-not-allowed'
          : 'text-neutral-900 dark:text-neutral-100 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700',
        'transition-colors duration-150',
        className
      )}
      onclick={handleClick}
      onkeydown={handleKeyDown}
      aria-disabled={disabled ? 'true' : 'false'}
      {...rest}
    >
      {icon && <span class="flex-shrink-0">{icon}</span>}
      <span class="flex-1">{children}</span>
    </div>
  );
};

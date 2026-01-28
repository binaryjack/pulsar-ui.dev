/**
 * Tab component implementation
 * Framework: Pulsar
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { ITabProps } from './tab.type';

/**
 * Tab component
 * Individual tab button
 */
export const Tab = ({
  id,
  isActive,
  onClick,
  disabled,
  children,
  class: className,
  ...rest
}: ITabProps): HTMLElement => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick(id);
    }
  };

  return (
    <button
      type="button"
      role="tab"
      id={`tab-${id}`}
      aria-controls={`panel-${id}`}
      aria-selected={isActive ? 'true' : 'false'}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      className={cn(
        'px-4 py-2 font-medium text-sm transition-colors duration-200',
        'border-b-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
        isActive
          ? 'border-primary-600 text-primary-600 dark:text-primary-400'
          : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200',
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
        className
      )}
      onclick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};

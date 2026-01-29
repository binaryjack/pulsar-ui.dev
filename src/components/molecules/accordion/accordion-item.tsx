/**
 * Accordion Item component - Individual collapsible panel
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { IAccordionItemProps } from './accordion-item.type';

export const AccordionItem = ({
  title,
  children,
  disabled = false,
  icon,
  expandedIcon,
  class: className,
  ...rest
}: IAccordionItemProps): HTMLElement => {
  // Get open state from parent (injected via data attribute)
  const isOpen = rest['data-open'] === 'true';

  const containerClasses = cn(
    'border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden',
    'transition-all duration-200',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  const headerClasses = cn(
    'flex items-center justify-between w-full px-4 py-3',
    'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750',
    'cursor-pointer select-none transition-all duration-200 touch-target state-layer',
    'focus:outline-none focus:ring-4 focus:ring-primary-100',
    disabled && 'pointer-events-none'
  );

  const contentClasses = cn(
    'px-4 pb-3 bg-white dark:bg-gray-800',
    'transition-all duration-200 overflow-hidden',
    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
  );

  const iconClasses = cn(
    'w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200',
    isOpen && 'rotate-180'
  );

  // Default chevron icon
  const defaultIcon = (
    <svg
      className={iconClasses}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  );

  const displayIcon = isOpen && expandedIcon ? expandedIcon : icon || defaultIcon;

  return (
    <div className={containerClasses} {...rest}>
      <button
        className={headerClasses}
        data-accordion-header
        aria-expanded={isOpen}
        aria-disabled={disabled}
        disabled={disabled}
        type="button"
      >
        <div className="flex-1 text-left font-medium text-gray-900 dark:text-gray-100">{title}</div>
        {displayIcon}
      </button>

      <div className={contentClasses} aria-hidden={!isOpen}>
        <div className="text-gray-700 dark:text-gray-300">{children}</div>
      </div>
    </div>
  );
};

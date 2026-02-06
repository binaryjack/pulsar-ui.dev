/**
 * Dropdown component
 * Framework: Pulsar
 */

import { cn } from '@pulsar-framework/design-tokens';
import { useKeyBindings } from '@pulsar-framework/pulsar.dev';
import type { IDropdownProps } from './dropdown.type';
import type { IDropdownItemProps } from './dropdown-item.type';

/**
 * DropdownItem component
 * Individual item within a dropdown menu
 */
export const DropdownItem = ({
  onclick,
  disabled = false,
  children,
  className,
  ...rest
}: IDropdownItemProps): HTMLElement => {
  return (
    <button
      type="button"
      className={cn(
        'w-full text-left px-4 py-2 text-sm text-neutral-700',
        'hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none',
        'transition-colors duration-150',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      onclick={onclick}
      {...rest}
    >
      {children}
    </button>
  );
};

/**
 * Dropdown component
 * Menu with keyboard navigation support
 */
export const Dropdown = ({
  isOpen: controlledIsOpen,
  onToggle,
  triggerElement,
  children,
  className,
  ...rest
}: IDropdownProps): HTMLElement => {
  let isOpen = controlledIsOpen ?? false;
  let dropdownElement: HTMLElement | null = null;
  let currentFocusIndex = -1;

  const toggleDropdown = () => {
    isOpen = !isOpen;
    updateVisibility();
    onToggle?.(isOpen);
  };

  const closeDropdown = () => {
    isOpen = false;
    updateVisibility();
    onToggle?.(isOpen);
  };

  const updateVisibility = () => {
    if (dropdownElement) {
      if (isOpen) {
        dropdownElement.classList.remove('hidden');
      } else {
        dropdownElement.classList.add('hidden');
      }
    }
  };

  const focusItem = (index: number) => {
    if (!dropdownElement) return;
    const items = dropdownElement.querySelectorAll('button:not([disabled])');
    if (items[index]) {
      (items[index] as HTMLElement).focus();
      currentFocusIndex = index;
    }
  };

  const handleKeyDown = useKeyBindings({
    onEscape: () => closeDropdown(),
    onArrowDown: (e) => {
      e.preventDefault();
      const items = dropdownElement?.querySelectorAll('button:not([disabled])');
      if (items && items.length > 0) {
        const nextIndex = (currentFocusIndex + 1) % items.length;
        focusItem(nextIndex);
      }
    },
    onArrowUp: (e) => {
      e.preventDefault();
      const items = dropdownElement?.querySelectorAll('button:not([disabled])');
      if (items && items.length > 0) {
        const prevIndex = currentFocusIndex <= 0 ? items.length - 1 : currentFocusIndex - 1;
        focusItem(prevIndex);
      }
    },
    onEnter: (e) => {
      e.preventDefault();
      if (dropdownElement) {
        const items = dropdownElement.querySelectorAll('button:not([disabled])');
        if (items[currentFocusIndex]) {
          (items[currentFocusIndex] as HTMLElement).click();
        }
      }
    },
  });

  return (
    <div className={cn('relative inline-block', className)} {...rest}>
      <div onclick={toggleDropdown}>{triggerElement}</div>
      <div
        ref={(el: HTMLElement | null) => (dropdownElement = el)}
        className={cn(
          'absolute z-50 mt-2 bg-white border border-neutral-200 rounded-lg shadow-lg',
          'min-w-[160px] py-1',
          'transition-all duration-200',
          !isOpen && 'hidden'
        )}
        role="menu"
        onkeydown={handleKeyDown}
      >
        {children}
      </div>
    </div>
  );
};

/**
 * Popover component
 * Framework: Pulsar
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { IPopoverProps } from './popover.type';

/**
 * Popover component
 * Displays floating content with click or hover trigger
 */
export const Popover = ({
  trigger = 'click',
  placement = 'bottom',
  isOpen: controlledIsOpen,
  onToggle,
  triggerElement,
  children,
  className,
  ...rest
}: IPopoverProps): HTMLElement => {
  let isOpen = controlledIsOpen ?? false;
  let popoverElement: HTMLElement | null = null;

  const placementClasses: Record<string, string> = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2 animate-fade-in',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2 animate-fade-in',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2 animate-fade-in',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2 animate-fade-in',
  };

  const togglePopover = () => {
    isOpen = !isOpen;
    updateVisibility();
    onToggle?.(isOpen);
  };

  const showPopover = () => {
    if (trigger === 'hover') {
      isOpen = true;
      updateVisibility();
      onToggle?.(isOpen);
    }
  };

  const hidePopover = () => {
    if (trigger === 'hover') {
      isOpen = false;
      updateVisibility();
      onToggle?.(isOpen);
    }
  };

  const updateVisibility = () => {
    if (popoverElement) {
      if (isOpen) {
        popoverElement.classList.remove('hidden');
      } else {
        popoverElement.classList.add('hidden');
      }
    }
  };

  const triggerProps =
    trigger === 'click'
      ? { onclick: togglePopover }
      : { onmouseenter: showPopover, onmouseleave: hidePopover };

  return (
    <div className={cn('relative inline-block', className)} {...rest}>
      <div {...triggerProps}>{triggerElement}</div>
      <div
        ref={(el: HTMLElement | null) => (popoverElement = el)}
        className={cn(
          'absolute z-50 bg-white border border-neutral-200 rounded-lg shadow-lg p-4',
          'transition-all duration-200',
          placementClasses[placement],
          !isOpen && 'hidden'
        )}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>
  );
};

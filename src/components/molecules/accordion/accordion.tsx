/**
 * Accordion component - Collapsible content panels
 */

import { useState, useEffect, useKeyBindings } from '@pulsar-framework/pulsar.dev';
import { cn } from '@pulsar-framework/design-tokens';
import type { IAccordionProps } from './accordion.type';

export const Accordion = ({
  allowMultiple = false,
  allowToggle = false,
  defaultIndex,
  children,
  class: className,
  ...rest
}: IAccordionProps): HTMLElement => {
  // Convert defaultIndex to array of open indices
  const initialIndices = Array.isArray(defaultIndex)
    ? defaultIndex
    : typeof defaultIndex === 'number'
      ? [defaultIndex]
      : [];

  const [openIndices, setOpenIndices] = useState<number[]>(initialIndices);

  // Convert children to array
  const items = Array.isArray(children) ? children : [children];

  // Toggle panel at index
  const togglePanel = (index: number) => {
    setOpenIndices((prev) => {
      const isOpen = prev.includes(index);

      if (allowMultiple) {
        // Multiple mode: add/remove from array
        if (isOpen) {
          return allowToggle ? prev.filter((i) => i !== index) : prev;
        }
        return [...prev, index];
      } else {
        // Single mode: only one panel open
        if (isOpen) {
          return allowToggle ? [] : prev;
        }
        return [index];
      }
    });
  };

  // Keyboard navigation
  useKeyBindings({
    ArrowDown: (e: KeyboardEvent) => {
      e.preventDefault();
      const currentIndex = openIndices[openIndices.length - 1] ?? -1;
      const nextIndex = (currentIndex + 1) % items.length;
      togglePanel(nextIndex);
    },
    ArrowUp: (e: KeyboardEvent) => {
      e.preventDefault();
      const currentIndex = openIndices[openIndices.length - 1] ?? 0;
      const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
      togglePanel(prevIndex);
    },
    Home: (e: KeyboardEvent) => {
      e.preventDefault();
      togglePanel(0);
    },
    End: (e: KeyboardEvent) => {
      e.preventDefault();
      togglePanel(items.length - 1);
    },
  });

  // Inject toggle handler into each item
  const enhancedItems = items.map((item, index) => {
    const isOpen = openIndices.includes(index);
    // Clone item and add data attributes
    const enhanced = item.cloneNode(true) as HTMLElement;
    enhanced.setAttribute('data-index', String(index));
    enhanced.setAttribute('data-open', String(isOpen));

    // Add click handler to header
    const header = enhanced.querySelector('[data-accordion-header]');
    if (header) {
      header.addEventListener('click', () => togglePanel(index));
    }

    return enhanced;
  });

  const classes = cn('space-y-2', className);

  return (
    <div class={classes} role="region" {...rest}>
      {enhancedItems}
    </div>
  );
};

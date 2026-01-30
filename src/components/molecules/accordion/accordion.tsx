/**
 * Accordion component - Collapsible content panels
 */

import { cn } from '@pulsar-framework/design-tokens';
import { useKeyBindings, useState } from '@pulsar-framework/pulsar.dev';
import type { IAccordionProps } from './accordion.type';

export const Accordion = ({
  allowMultiple = false,
  allowToggle = false,
  defaultIndex,
  children,
  className,
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
    onArrowDown: (e: KeyboardEvent) => {
      e.preventDefault();
      const indices = openIndices();
      const currentIndex = indices[indices.length - 1] ?? -1;
      const nextIndex = (currentIndex + 1) % items.length;
      togglePanel(nextIndex);
    },
    onArrowUp: (e: KeyboardEvent) => {
      e.preventDefault();
      const indices = openIndices();
      const currentIndex = indices[indices.length - 1] ?? 0;
      const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
      togglePanel(prevIndex);
    },
  });

  // Inject toggle handler into each item
  const enhancedItems = items.map((item, index) => {
    const isOpen = openIndices().includes(index);
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
    <div className={classes} role="region" {...rest}>
      {enhancedItems}
    </div>
  );
};

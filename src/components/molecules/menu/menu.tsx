/**
 * Menu component implementation
 * Framework: Pulsar
 * Molecule: Vertical menu with items and dividers
 */

import { cn } from '@pulsar-framework/design-tokens';
import { Skeleton } from '../../atoms/skeleton';
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder';
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder';
import type { IMenuProps } from './menu.type';

// External to the component so it's compiled ONCE!
const menuDefaultConfig = new ComponentConfigBuilder('primary').build();

// External to the component so it's compiled ONCE!
const menuDefaultStyling = new ComponentStylingBuilder()
  .base(
    'py-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg'
  )
  .build();

/**
 * Menu component
 * Creates a vertical menu with keyboard navigation - molecule component
 */
export const Menu = ({
  config = menuDefaultConfig,
  styling = menuDefaultStyling,
  children,
  class: className,
  ...rest
}: IMenuProps): HTMLElement => {
  if (config.loading) {
    return <Skeleton width="w-48" height="h-64" rounded="lg" />;
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    const items = Array.from(
      (e.currentTarget as HTMLElement).querySelectorAll('[role="menuitem"]:not([disabled])')
    );
    const currentIndex = items.findIndex((item) => item === e.target);

    if (currentIndex === -1) return;

    let nextIndex = currentIndex;

    if (e.key === 'ArrowDown') {
      nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
      e.preventDefault();
    } else if (e.key === 'Home') {
      nextIndex = 0;
      e.preventDefault();
    } else if (e.key === 'End') {
      nextIndex = items.length - 1;
      e.preventDefault();
    }

    if (nextIndex !== currentIndex) {
      (items[nextIndex] as HTMLElement).focus();
    }
  };

  return (
    <div
      role="menu"
      className={cn(styling.base, config.className, styling.custom, className)}
      ariaBusy={config.loading ? 'true' : 'false'}
      onkeydown={handleKeyDown}
      {...rest}
    >
      {children}
    </div>
  );
};

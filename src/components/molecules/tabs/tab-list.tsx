/**
 * TabList component implementation
 * Framework: Pulsar
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { ITabListProps } from './tab-list.type';

/**
 * TabList component
 * Container for Tab components
 */
export const TabList = ({
  children,
  class: className,
  ...rest
}: ITabListProps & { activeId?: string; onTabChange?: (id: string) => void }): HTMLElement => {
  const activeId = rest.activeId;
  const onTabChange = rest.onTabChange;

  // Clone children to pass activeId and onClick handler
  const enhancedChildren = children.map((child: any) => {
    if (child && typeof child === 'object' && 'props' in child) {
      const tabId = child.props.id;
      return {
        ...child,
        props: {
          ...(child.props as any),
          isActive: tabId === activeId,
          onClick: onTabChange,
        },
      };
    }
    return child;
  });

  const handleKeyDown = (e: KeyboardEvent) => {
    const tabs = Array.from((e.currentTarget as HTMLElement).querySelectorAll('[role="tab"]'));
    const currentIndex = tabs.findIndex((tab) => tab === e.target);

    if (currentIndex === -1) return;

    let nextIndex = currentIndex;

    if (e.key === 'ArrowLeft') {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
      e.preventDefault();
    }

    if (nextIndex !== currentIndex) {
      const nextTab = tabs[nextIndex] as HTMLElement;
      nextTab.focus();
      nextTab.click();
    }
  };

  return (
    <div
      role="tablist"
      className={cn('flex border-b border-neutral-200 dark:border-neutral-700', className)}
      onkeydown={handleKeyDown}
      {...rest}
    >
      {enhancedChildren}
    </div>
  );
};

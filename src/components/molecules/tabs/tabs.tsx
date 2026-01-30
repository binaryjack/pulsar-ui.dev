/**
 * Tabs component implementation
 * Framework: Pulsar
 * Molecule: Compound component for tabbed navigation
 */

import { cn } from '@pulsar-framework/design-tokens';
import { useState } from '@pulsar-framework/pulsar.dev';
import { Skeleton } from '../../atoms/skeleton';
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder';
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder';
import type { ITabsProps } from './tabs.type';

// External to the component so it's compiled ONCE!
const tabsDefaultConfig = new ComponentConfigBuilder('primary').build();

// External to the component so it's compiled ONCE!
const tabsDefaultStyling = new ComponentStylingBuilder().base('w-full').build();

/**
 * Tabs component
 * Creates a tabbed interface with keyboard navigation - compound component
 */
export const Tabs = ({
  config = tabsDefaultConfig,
  styling = tabsDefaultStyling,
  defaultActiveId,
  activeId,
  onChange,
  children,
  class: className,
  ...rest
}: ITabsProps): HTMLElement => {
  if (config.loading) {
    return <Skeleton width="w-full" height="h-64" rounded="md" />;
  }

  const [internalActiveId, setInternalActiveId] = useState(defaultActiveId || '');

  const currentActiveId = activeId !== undefined ? activeId : internalActiveId();

  const handleTabChange = (id: string) => {
    if (activeId === undefined) {
      setInternalActiveId(id);
    }
    onChange?.(id);
  };

  // Clone children to pass context
  const enhancedChildren = children.map((child: any) => {
    if (child && typeof child === 'object' && 'props' in child) {
      // Pass activeId and onChange to TabList and TabPanels
      return {
        ...child,
        props: {
          ...(child.props as any),
          activeId: currentActiveId,
          onTabChange: handleTabChange,
        },
      };
    }
    return child;
  });

  return (
    <div
      className={cn(styling.base, config.className, styling.custom, className)}
      ariaBusy={config.loading ? 'true' : 'false'}
      {...rest}
    >
      {enhancedChildren}
    </div>
  );
};

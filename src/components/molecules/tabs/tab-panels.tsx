/**
 * TabPanels component implementation
 * Framework: Pulsar
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { ITabPanelsProps } from './tab-panels.type';

/**
 * TabPanels component
 * Container for TabPanel components
 */
export const TabPanels = ({
  children,
  class: className,
  ...rest
}: ITabPanelsProps & { activeId?: string }): HTMLElement => {
  const activeId = rest.activeId;

  // Clone children to pass activeId
  const enhancedChildren = children.map((child: any) => {
    if (child && typeof child === 'object' && 'props' in child) {
      const panelId = child.props.id;
      return {
        ...child,
        props: {
          ...(child.props as any),
          isActive: panelId === activeId,
        },
      };
    }
    return child;
  });

  return (
    <div className={cn('mt-4', className)} {...rest}>
      {enhancedChildren}
    </div>
  );
};

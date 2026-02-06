/**
 * TabPanel component implementation
 * Framework: Pulsar
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { ITabPanelProps } from './tab-panel.type';

/**
 * TabPanel component
 * Content panel for a tab
 */
export const TabPanel = ({
  id,
  isActive,
  children,
  class: className,
  ...rest
}: ITabPanelProps): HTMLElement | null => {
  if (!isActive) return null;

  return (
    <div
      role="tabpanel"
      id={`panel-${id}`}
      aria-labelledby={`tab-${id}`}
      tabIndex={0}
      className={cn('focus:outline-none', className)}
      {...rest}
    >
      {children}
    </div>
  );
};

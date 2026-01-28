/**
 * Tabs component type definition
 */

import type { ComponentConfig } from '../../types/component-config.type';
import type { ComponentStyling } from '../../types/component-styling.type';

export interface ITabsProps {
  config?: ComponentConfig;
  styling?: ComponentStyling;
  defaultActiveId?: string;
  activeId?: string;
  onChange?: (id: string) => void;
  children: HTMLElement[];
  class?: string;
  [key: string]: unknown;
}

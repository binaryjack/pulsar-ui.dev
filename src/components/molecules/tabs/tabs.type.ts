/**
 * Tabs component type definition
 */

import type { IComponentConfig } from '../../utils/component-config-builder/component-config.type';
import type { IComponentStyling } from '../../utils/component-styling-builder/component-styling.type';

export interface ITabsProps {
  config?: IComponentConfig;
  styling?: IComponentStyling;
  defaultActiveId?: string;
  activeId?: string;
  onChange?: (id: string) => void;
  children: HTMLElement[];
  class?: string;
  [key: string]: unknown;
}

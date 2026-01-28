/**
 * Menu component type definition
 */

import type { ComponentConfig } from '../../types/component-config.type';
import type { ComponentStyling } from '../../types/component-styling.type';

export interface IMenuProps {
  config?: ComponentConfig;
  styling?: ComponentStyling;
  children: HTMLElement[];
  class?: string;
  [key: string]: unknown;
}

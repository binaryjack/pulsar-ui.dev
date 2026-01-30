/**
 * Menu component type definition
 */

import type { IComponentConfig } from '../../utils/component-config-builder/component-config.type';
import type { IComponentStyling } from '../../utils/component-styling-builder/component-styling.type';

export interface IMenuProps {
  config?: IComponentConfig;
  styling?: IComponentStyling;
  children: HTMLElement[];
  class?: string;
  [key: string]: unknown;
}

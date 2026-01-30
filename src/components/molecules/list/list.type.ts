/**
 * List component type definition
 */

import type { IComponentConfig } from '../../utils/component-config-builder/component-config.type';
import type { IComponentStyling } from '../../utils/component-styling-builder/component-styling.type';
import type { Spacing } from '../../enums';

export interface IListProps {
  config?: IComponentConfig;
  styling?: IComponentStyling;
  ordered?: boolean;
  spacing?: Spacing;
  children: HTMLElement[];
  class?: string;
  [key: string]: unknown;
}

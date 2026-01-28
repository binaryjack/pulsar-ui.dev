/**
 * List component type definition
 */

import type { ComponentConfig } from '../../types/component-config.type';
import type { ComponentStyling } from '../../types/component-styling.type';
import type { Spacing } from '../enums';

export interface IListProps {
  config?: ComponentConfig;
  styling?: ComponentStyling;
  ordered?: boolean;
  spacing?: Spacing;
  children: HTMLElement[];
  class?: string;
  [key: string]: unknown;
}

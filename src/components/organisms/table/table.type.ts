/**
 * Table component type definition
 */

import type { ComponentConfig } from '../../types/component-config.type';
import type { ComponentStyling } from '../../types/component-styling.type';

export interface ITableProps {
  config?: ComponentConfig;
  styling?: ComponentStyling;
  striped?: boolean;
  hoverable?: boolean;
  responsive?: boolean;
  children: HTMLElement[];
  class?: string;
  [key: string]: unknown;
}

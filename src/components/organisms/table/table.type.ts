/**
 * Table component type definition
 */

import type { IComponentConfig } from '../../utils/component-config-builder/component-config.type';
import type { IComponentStyling } from '../../utils/component-styling-builder/component-styling.type';

export interface ITableProps {
  config?: IComponentConfig;
  styling?: IComponentStyling;
  striped?: boolean;
  hoverable?: boolean;
  responsive?: boolean;
  children: any;
  class?: string;
  [key: string]: unknown;
}

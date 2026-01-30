/**
 * RetractablePanel component props interface
 * Panel that can collapse/expand horizontally or vertically
 */

import type { Pulsar } from '@pulsar-framework/pulsar.dev';
import type { IComponentConfig } from '../../utils/component-config-builder/component-config.type';
import type { IComponentStyling } from '../../utils/component-styling-builder/component-styling.type';

export interface IRetractablePanelProps extends Pulsar.HtmlExtends<'div'> {
  /** Component configuration (color, size, state, etc.) */
  config?: IComponentConfig;

  /** Component styling (colors, spacing, borders, etc.) */
  styling?: IComponentStyling;

  /** Panel header content */
  header?: Pulsar.Children;

  /** Panel footer content */
  footer?: Pulsar.Children;

  /** Panel body content (main content area) */
  children?: Pulsar.Children;

  /** Direction of collapse animation */
  direction?: 'horizontal' | 'vertical';

  /** Initial expanded/collapsed state */
  isExpanded?: boolean;

  /** Position of the panel (for fixed positioning) */
  position?: 'top' | 'right' | 'bottom' | 'left' | 'none';

  /** Maximum height when expanded (for vertical) */
  maxHeight?: string;

  /** Maximum width when expanded (for horizontal) */
  maxWidth?: string;

  /** Callback when expand/collapse state changes */
  onToggle?: (isExpanded: boolean) => void;

  /** Show toggle button in header */
  showToggleButton?: boolean;

  /** Custom toggle button icon */
  toggleIcon?: HTMLElement;

  /** Animation duration in ms */
  animationDuration?: number;
}

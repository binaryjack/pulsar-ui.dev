/**
 * Drawer component props interface
 */

import type { Pulsar } from '@pulsar-framework/pulsar.dev';
import type { DrawerPlacement, DrawerSize } from '../enums';

export interface IDrawerProps extends Pulsar.HtmlExtends<'div'> {
  /**
   * Is drawer open
   */
  readonly open: boolean;

  /**
   * Close handler
   */
  readonly onClose: () => void;

  /**
   * Drawer placement
   * @default 'right'
   */
  readonly placement?: DrawerPlacement;

  /**
   * Drawer size
   * @default 'md'
   */
  readonly size?: DrawerSize;

  /**
   * Show backdrop
   * @default true
   */
  readonly showBackdrop?: boolean;

  /**
   * Close on backdrop click
   * @default true
   */
  readonly closeOnBackdropClick?: boolean;

  /**
   * Close on escape key
   * @default true
   */
  readonly closeOnEscape?: boolean;

  /**
   * Drawer content
   */
  readonly children: HTMLElement | HTMLElement[];
}

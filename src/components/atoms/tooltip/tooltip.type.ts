/**
 * Tooltip component props interface
 */

import type { Pulsar } from 'pulsar';
import type { TooltipPlacement } from '../enums';

export interface ITooltipProps extends Pulsar.HtmlExtends<'div'> {
  /**
   * Tooltip content
   */
  readonly content: string | HTMLElement;

  /**
   * Tooltip placement
   * @default 'top'
   */
  readonly placement?: TooltipPlacement;

  /**
   * Show delay in ms
   * @default 200
   */
  readonly showDelay?: number;

  /**
   * Hide delay in ms
   * @default 0
   */
  readonly hideDelay?: number;

  /**
   * Tooltip trigger element
   */
  readonly children: HTMLElement;
}

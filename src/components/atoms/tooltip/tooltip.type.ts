/**
 * Tooltip component props interface
 */

import type { Pulsar } from '@pulsar-framework/pulsar.dev';
import type { TooltipPlacement } from '../../enums';

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
   * Delay before showing tooltip (ms)
   * @default 200
   */
  readonly showDelay?: number;

  /**
   * Delay before hiding tooltip (ms)
   * @default 0
   */
  readonly hideDelay?: number;

  /**
   * Children element
   */
  readonly children: any;
}

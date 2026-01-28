/**
 * Slider component props interface
 */

import type { Pulsar } from '@pulsar-framework/pulsar.dev';

export interface ISliderProps extends Pulsar.HtmlExtends<'div'> {
  /**
   * Current value
   * @default 0
   */
  readonly value?: number;

  /**
   * Minimum value
   * @default 0
   */
  readonly min?: number;

  /**
   * Maximum value
   * @default 100
   */
  readonly max?: number;

  /**
   * Step increment
   * @default 1
   */
  readonly step?: number;

  /**
   * Show value label
   * @default false
   */
  readonly showValue?: boolean;

  /**
   * Is disabled
   * @default false
   */
  readonly disabled?: boolean;

  /**
   * Change handler
   */
  readonly onChange?: (value: number) => void;

  /**
   * Slider color variant
   * @default 'primary'
   */
  readonly variant?: 'primary' | 'success' | 'warning' | 'error';
}

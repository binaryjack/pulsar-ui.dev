/**
 * Progress component props interface
 */

import type { Pulsar } from '@pulsar-framework/pulsar.dev';
import type { ProgressSize, ProgressVariant } from '../../enums';

export interface IProgressProps extends Pulsar.HtmlExtends<'div'> {
  /**
   * Progress value (0-100)
   */
  readonly value?: number;

  /**
   * Maximum value
   * @default 100
   */
  readonly max?: number;

  /**
   * Indeterminate mode (loading animation)
   * @default false
   */
  readonly indeterminate?: boolean;

  /**
   * Progress variant/color
   * @default 'primary'
   */
  readonly variant?: ProgressVariant;

  /**
   * Progress size
   * @default 'md'
   */
  readonly size?: ProgressSize;

  /**
   * Show percentage label
   * @default false
   */
  readonly showLabel?: boolean;

  /**
   * Custom label text (overrides percentage)
   */
  readonly label?: string;
}

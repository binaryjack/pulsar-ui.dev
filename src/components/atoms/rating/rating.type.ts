/**
 * Rating component props interface
 */

import type { Pulsar } from 'pulsar';

export interface IRatingProps extends Pulsar.HtmlExtends<'div'> {
  /**
   * Current rating value
   * @default 0
   */
  readonly value?: number;

  /**
   * Maximum rating (number of stars)
   * @default 5
   */
  readonly max?: number;

  /**
   * Allow half-star ratings
   * @default false
   */
  readonly allowHalf?: boolean;

  /**
   * Is readonly (non-interactive)
   * @default false
   */
  readonly readonly?: boolean;

  /**
   * Is disabled
   * @default false
   */
  readonly disabled?: boolean;

  /**
   * Rating size
   * @default 'md'
   */
  readonly size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Custom color for filled stars
   */
  readonly color?: string;

  /**
   * Change handler
   */
  readonly onChange?: (value: number) => void;
}

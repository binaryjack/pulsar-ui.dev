/**
 * Divider component props interface
 */

import type { Pulsar } from '@pulsar-framework/pulsar.dev';
import type { DividerOrientation } from '../../enums';

export interface IDividerProps extends Pulsar.HtmlExtends<'hr'> {
  /**
   * Divider orientation
   * @default 'horizontal'
   */
  readonly orientation?: DividerOrientation;

  /**
   * Custom thickness
   */
  readonly thickness?: string;

  /**
   * Custom spacing
   */
  readonly spacing?: string;
}

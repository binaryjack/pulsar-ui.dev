/**
 * ToastContainer component props interface
 */

import type { Pulsar } from '@pulsar-framework/pulsar.dev';
import type { ToastPosition } from '../../enums/toast-position.type';

export interface IToastContainerProps extends Pulsar.HtmlExtends<'div'> {
  readonly position?: ToastPosition;
  readonly maxToasts?: number;
}

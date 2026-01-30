/**
 * Toast component props interface
 */

import type { Pulsar } from '@pulsar-framework/pulsar.dev';
import type { AlertVariant } from '../../enums/alert-variant.type';

export interface IToastProps extends Pulsar.HtmlExtends<'div'> {
  readonly id: string;
  readonly message: string;
  readonly variant?: AlertVariant;
  readonly duration?: number;
  readonly onClose?: (id: string) => void;
}

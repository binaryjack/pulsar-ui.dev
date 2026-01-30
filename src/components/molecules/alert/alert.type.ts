/**
 * Alert component props interface
 */

import type { Pulsar } from '@pulsar-framework/pulsar.dev';
import type { AlertVariant } from '../../enums/alert-variant.type';

/**
 * Alert component props
 * Extends Pulsar.HtmlExtends<'div'> which includes className property
 */
export interface IAlertProps extends Pulsar.HtmlExtends<'div'> {
  readonly variant?: AlertVariant;
  readonly closable?: boolean;
  readonly onClose?: () => void;
  readonly children: any;
}

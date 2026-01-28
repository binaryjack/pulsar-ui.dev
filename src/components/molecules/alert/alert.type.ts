/**
 * Alert component props interface
 */

import type { AlertVariant } from '../../enums/alert-variant.type';

export interface IAlertProps extends Pulsar.HtmlExtends<'div'> {
  readonly variant?: AlertVariant;
  readonly closable?: boolean;
  readonly onClose?: () => void;
  readonly children: JSX.Children;
}

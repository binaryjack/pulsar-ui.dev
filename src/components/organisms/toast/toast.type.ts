/**
 * Toast component props interface
 */

import type { ToastPosition } from '../../enums/toast-position.type';
import type { AlertVariant } from '../../enums/alert-variant.type';

export interface IToastProps extends Pulsar.HtmlExtends<'div'> {
  readonly id: string;
  readonly message: string;
  readonly variant?: AlertVariant;
  readonly duration?: number;
  readonly onClose?: (id: string) => void;
}

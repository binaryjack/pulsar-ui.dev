/**
 * Modal component props interface
 */

import type { ModalSize } from '../../enums/modal-size.type';
import type { Pulsar } from '@pulsar-framework/pulsar.dev';

export interface IModalProps extends Pulsar.HtmlExtends<'div'> {
  readonly isOpen?: boolean;
  readonly onClose?: () => void;
  readonly size?: ModalSize;
  readonly backdrop?: boolean;
  readonly escapeToClose?: boolean;
  readonly children: any;
}

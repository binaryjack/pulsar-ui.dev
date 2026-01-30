import type { Pulsar } from '@pulsar-framework/pulsar.dev';

/**
 * ModalBody component props interface
 */

export interface IModalBodyProps extends Pulsar.HtmlExtends<'div'> {
  readonly children: any;
}

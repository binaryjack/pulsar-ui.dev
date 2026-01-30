import type { Pulsar } from '@pulsar-framework/pulsar.dev';

/**
 * ModalFooter component props interface
 */

export interface IModalFooterProps extends Pulsar.HtmlExtends<'div'> {
  readonly children: any;
}

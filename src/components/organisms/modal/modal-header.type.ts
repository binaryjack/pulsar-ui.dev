import type { Pulsar } from '@pulsar-framework/pulsar.dev';

/**
 * ModalHeader component props interface
 */

export interface IModalHeaderProps extends Pulsar.HtmlExtends<'div'> {
  readonly children: any;
}

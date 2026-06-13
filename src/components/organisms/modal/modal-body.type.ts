import type { Pulsar } from '@synetics/synetics.dev';

/**
 * ModalBody component props interface
 */

export interface IModalBodyProps extends Pulsar.HtmlExtends<'div'> {
  readonly children: any;
}

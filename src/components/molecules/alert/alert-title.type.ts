import type { Pulsar } from '@pulsar-framework/pulsar.dev';

/**
 * AlertTitle component props interface
 */

export interface IAlertTitleProps extends Pulsar.HtmlExtends<'h5'> {
  readonly children: any;
}

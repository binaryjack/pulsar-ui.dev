import type { Pulsar } from '@pulsar-framework/pulsar.dev';

/**
 * AlertDescription component props interface
 */

export interface IAlertDescriptionProps extends Pulsar.HtmlExtends<'div'> {
  readonly children: any;
}

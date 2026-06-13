import type { Pulsar } from '@synetics/synetics.dev';

/**
 * AlertDescription component props interface
 */

export interface IAlertDescriptionProps extends Pulsar.HtmlExtends<'div'> {
  readonly children: any;
}

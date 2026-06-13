import type { Pulsar } from '@synetics/synetics.dev';

/**
 * AlertTitle component props interface
 */

export interface IAlertTitleProps extends Pulsar.HtmlExtends<'h5'> {
  readonly children: any;
}

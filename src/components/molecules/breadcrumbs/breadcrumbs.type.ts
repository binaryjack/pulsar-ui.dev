/**
 * Breadcrumbs component props interface
 */

import type { Pulsar } from '@pulsar-framework/pulsar.dev';

export interface IBreadcrumbsProps extends Pulsar.HtmlExtends<'nav'> {
  /**
   * Breadcrumb separator
   * @default '/'
   */
  readonly separator?: string | HTMLElement;

  /**
   * Breadcrumb items
   */
  readonly children: HTMLElement | HTMLElement[];
}

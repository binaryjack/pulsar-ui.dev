/**
 * Breadcrumbs component props interface
 */

import type { Pulsar } from 'pulsar';

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

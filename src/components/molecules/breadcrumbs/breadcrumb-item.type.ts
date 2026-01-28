/**
 * Breadcrumb Item component props interface
 */

import type { Pulsar } from 'pulsar';

export interface IBreadcrumbItemProps extends Pulsar.HtmlExtends<'li'> {
  /**
   * Link href
   */
  readonly href?: string;

  /**
   * Is current page
   * @default false
   */
  readonly current?: boolean;

  /**
   * Item content
   */
  readonly children: string | HTMLElement;
}

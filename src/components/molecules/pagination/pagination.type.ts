/**
 * Pagination component props interface
 */

import type { Pulsar } from '@pulsar-framework/pulsar.dev';

export interface IPaginationProps extends Pulsar.HtmlExtends<'nav'> {
  /**
   * Current page (1-indexed)
   */
  readonly currentPage: number;

  /**
   * Total number of pages
   */
  readonly totalPages: number;

  /**
   * Number of page buttons to show
   * @default 5
   */
  readonly pageRange?: number;

  /**
   * Show first/last buttons
   * @default true
   */
  readonly showFirstLast?: boolean;

  /**
   * Page change handler
   */
  readonly onPageChange: (page: number) => void;
}

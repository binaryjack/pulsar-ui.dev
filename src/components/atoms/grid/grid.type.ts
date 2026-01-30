/**
 * Grid component props interface
 */

import type { Pulsar } from '@pulsar-framework/pulsar.dev';
import type { Spacing } from '../../enums';

export interface IGridProps extends Pulsar.HtmlExtends<'div'> {
  /**
   * Number of columns
   * @default 12
   */
  readonly columns?: number;

  /**
   * Grid gap (all directions)
   */
  readonly gap?: Spacing;

  /**
   * Row gap
   */
  readonly rowGap?: Spacing;

  /**
   * Column gap
   */
  readonly columnGap?: Spacing;

  /**
   * Custom grid template columns
   */
  readonly templateColumns?: string;

  /**
   * Custom grid template rows
   */
  readonly templateRows?: string;

  /**
   * Grid children
   */
  readonly children?: HTMLElement | HTMLElement[];
}

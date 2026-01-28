/**
 * Accordion component props interface
 */

import type { Pulsar } from 'pulsar';

export interface IAccordionProps extends Pulsar.HtmlExtends<'div'> {
  /**
   * Allow multiple panels to be open simultaneously
   * @default false
   */
  readonly allowMultiple?: boolean;

  /**
   * Allow all panels to be closed
   * @default false
   */
  readonly allowToggle?: boolean;

  /**
   * Default open panel indices (0-based)
   */
  readonly defaultIndex?: number | number[];

  /**
   * Accordion items
   */
  readonly children: HTMLElement | HTMLElement[];
}

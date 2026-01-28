/**
 * Accordion Item component props interface
 */

import type { Pulsar } from 'pulsar';

export interface IAccordionItemProps extends Pulsar.HtmlExtends<'div'> {
  /**
   * Panel title
   */
  readonly title: string | HTMLElement;

  /**
   * Panel content
   */
  readonly children: HTMLElement | HTMLElement[];

  /**
   * Is panel disabled
   * @default false
   */
  readonly disabled?: boolean;

  /**
   * Custom icon for closed state
   */
  readonly icon?: HTMLElement;

  /**
   * Custom icon for open state
   */
  readonly expandedIcon?: HTMLElement;
}

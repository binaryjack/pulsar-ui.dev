/**
 * Stack component props interface
 */

import type { Pulsar } from 'pulsar';
import type { StackAlign, StackJustify, Spacing } from '../enums';

export interface IStackProps extends Pulsar.HtmlExtends<'div'> {
  /**
   * Stack direction
   * @default 'vertical'
   */
  readonly direction?: 'horizontal' | 'vertical';

  /**
   * Spacing between items
   * @default 'md'
   */
  readonly spacing?: Spacing;

  /**
   * Align items
   */
  readonly align?: StackAlign;

  /**
   * Justify content
   */
  readonly justify?: StackJustify;

  /**
   * Allow wrapping
   * @default false
   */
  readonly wrap?: boolean;

  /**
   * Stack children
   */
  readonly children?: HTMLElement | HTMLElement[];
}

/**
 * Stack component props interface
 */

import type { Pulsar } from '@pulsar-framework/pulsar.dev';
import type { Spacing, StackAlign, StackJustify } from '../../enums';

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
   * Stack children - supports all JSX patterns
   * Including conditionals, arrays, and primitives
   */
  readonly children?: Pulsar.Children;
}

/**
 * Container component props interface
 */

import type { Pulsar } from '@pulsar-framework/pulsar.dev';
import type { ContainerMaxWidth, ContainerPadding } from '../enums';

export interface IContainerProps extends Pulsar.HtmlExtends<'div'> {
  /**
   * Maximum width
   * @default 'xl'
   */
  readonly maxWidth?: ContainerMaxWidth;

  /**
   * Horizontal padding
   * @default 'md'
   */
  readonly padding?: ContainerPadding;

  /**
   * Center the container
   * @default true
   */
  readonly centered?: boolean;

  /**
   * Container children - supports all JSX patterns
   * Including conditionals, arrays, and primitives
   */
  readonly children?: Pulsar.Children;
}

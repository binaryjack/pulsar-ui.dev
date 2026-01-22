/**
 * Spinner component type definitions
 */

import type { Pulsar } from 'pulsar'
import type { ComponentSize } from '@pulsar/design-tokens'

/**
 * Spinner component props
 */
export interface ISpinnerProps extends Pulsar.HtmlExtends<'span'> {
  /**
   * Size of the spinner
   * @default 'md'
   */
  size?: ComponentSize
    className?: string
  /**
   * Label for screen readers
   * @default 'Loading'
   */
  label?: string
}

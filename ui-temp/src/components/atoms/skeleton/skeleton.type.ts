/**
 * Skeleton component props interface
 */

import type { Pulsar } from 'pulsar'

export interface ISkeletonProps extends Pulsar.HtmlExtends<'div'> {
  readonly width?: string
  readonly height?: string
  readonly rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  readonly className?: string
}

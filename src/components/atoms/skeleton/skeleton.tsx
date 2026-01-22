/**
 * Skeleton component
 * Loading placeholder for content
 */

import { cn } from '../../../design/utility/class-names'
import { roundedClasses } from '../../../design/utility/rounded-classes'
import { type ISkeletonProps } from './skeleton.type'

export const Skeleton = ({
  width = 'w-full',
  height = 'h-4',
  rounded = 'md',
  className,
  ...rest
}: ISkeletonProps): HTMLElement => {
  return (
    <div
      className={cn(
        'animate-pulse bg-neutral-200',
        width,
        height,
        roundedClasses[rounded],
        className
      )}
      role="status"
      aria-label="Loading"
      {...rest}
    />
  )
}

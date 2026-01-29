/**
 * Progress Component - Declarative Implementation
 * Linear progress indicator using design tokens
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { IProgressProps } from './progress.type';

/**
 * Progress component
 * Creates a linear progress bar - atomic component
 */
export const Progress = ({
  value = 0,
  max = 100,
  indeterminate = false,
  variant = 'primary',
  size = 'md',
  showLabel = false,
  label,
  class: className,
  ...rest
}: IProgressProps): HTMLElement => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const variantClasses = {
    primary: 'bg-blue-500 transition-all duration-500',
    success: 'bg-green-500 transition-all duration-500',
    warning: 'bg-yellow-500 transition-all duration-500',
    error: 'bg-red-500 transition-all duration-500',
  };

  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  const progressClasses = cn(
    'relative w-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700',
    sizeClasses[size]
  );

  const barClasses = cn(
    'h-full rounded-full transition-all duration-300',
    variantClasses[variant],
    indeterminate && 'animate-pulse'
  );

  return (
    <div className={cn('w-full', className)} {...rest}>
      <div
        className={progressClasses}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={indeterminate ? undefined : 0}
        aria-valuemax={indeterminate ? undefined : max}
      >
        <div className={barClasses} style={indeterminate ? undefined : `width: ${percentage}%`} />
      </div>
      {(showLabel || label) && (
        <div className="mt-1 text-sm text-right text-gray-600 dark:text-gray-400">
          {label || `${Math.round(percentage)}%`}
        </div>
      )}
    </div>
  );
};

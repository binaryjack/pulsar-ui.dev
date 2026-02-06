/**
 * Rating component - Star rating display and input
 */

import { cn } from '@pulsar-framework/design-tokens';
import { useState } from '@pulsar-framework/pulsar.dev';
import type { IRatingProps } from './rating.type';

export const Rating = ({
  value = 0,
  max = 5,
  allowHalf = false,
  readonly = false,
  disabled = false,
  size = 'md',
  color,
  onChange,
  className,
  ...rest
}: IRatingProps): HTMLElement => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const [currentValue, setCurrentValue] = useState(value);

  const displayValue: number =
    hoverValue() !== null ? (hoverValue() as number) : (currentValue() as number);

  const handleClick = (starValue: number) => {
    if (readonly || disabled) return;
    setCurrentValue(starValue);
    onChange?.(starValue);
  };

  const handleMouseEnter = (starValue: number) => {
    if (readonly || disabled) return;
    setHoverValue(starValue);
  };

  const handleMouseLeave = () => {
    if (readonly || disabled) return;
    setHoverValue(null);
  };

  // Size classes
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10',
  };

  const containerClasses = cn(
    'inline-flex items-center gap-1',
    !readonly && !disabled && 'cursor-pointer',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  // Generate star elements
  const stars: HTMLElement[] = [];
  for (let i = 1; i <= max; i++) {
    const fullValue = i;
    const halfValue = i - 0.5;

    const isFilled = displayValue >= fullValue;
    const isHalfFilled = allowHalf && displayValue >= halfValue && displayValue < fullValue;

    const starClasses = cn(
      'transition-all duration-150 hover:scale-110 touch-target',
      'focus:outline-none focus:ring-2 focus:ring-primary-100 focus:ring-offset-1',
      sizeClasses[size],
      isFilled || isHalfFilled
        ? color || 'text-yellow-400 dark:text-yellow-500'
        : 'text-gray-300 dark:text-gray-600'
    );

    const starElement = (
      <svg
        className={starClasses}
        fill={isFilled ? 'currentColor' : isHalfFilled ? 'url(#half-fill)' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => handleClick(fullValue)}
        onMouseEnter={() => handleMouseEnter(fullValue)}
        data-value={fullValue}
      >
        {isHalfFilled && (
          <defs>
            <linearGradient id="half-fill">
              <stop offset="50%" stop-color="currentColor" />
              <stop offset="50%" stop-color="transparent" />
            </linearGradient>
          </defs>
        )}
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    );

    stars.push(starElement);
  }

  return (
    <div
      className={containerClasses}
      onMouseLeave={handleMouseLeave}
      role="radiogroup"
      aria-label={`Rating: ${currentValue()} out of ${max}`}
      aria-disabled={disabled}
      {...rest}
    >
      {stars}
    </div>
  );
};

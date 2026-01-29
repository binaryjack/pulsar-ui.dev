/**
 * Slider component - Range input control
 */

import { cn } from '@pulsar-framework/design-tokens';
import { useState } from '@pulsar-framework/pulsar.dev';
import type { ISliderProps } from './slider.type';

export const Slider = ({
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  showValue = false,
  disabled = false,
  onChange,
  variant = 'primary',
  class: className,
  ...rest
}: ISliderProps): HTMLElement => {
  const [currentValue, setCurrentValue] = useState(value);

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const newValue = Number(target.value);
    setCurrentValue(newValue);
    onChange?.(newValue);
  };

  // Calculate percentage for styling
  const percentage = ((currentValue - min) / (max - min)) * 100;

  // Variant colors
  const variantColors = {
    primary: 'bg-blue-500 dark:bg-blue-600',
    success: 'bg-green-500 dark:bg-green-600',
    warning: 'bg-yellow-500 dark:bg-yellow-600',
    error: 'bg-red-500 dark:bg-red-600',
  };

  const containerClasses = cn('w-full', className);

  const wrapperClasses = cn(
    'relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full transition-all duration-200 hover:bg-gray-300 dark:hover:bg-gray-600'
  );

  const fillClasses = cn(
    'absolute left-0 top-0 h-full rounded-full transition-all duration-150',
    variantColors[variant],
    disabled && 'opacity-50'
  );

  const inputClasses = cn(
    'absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer touch-target-comfortable',
    disabled && 'cursor-not-allowed'
  );

  const thumbClasses = cn(
    'absolute top-1/2 -translate-y-1/2 -translate-x-1/2',
    'w-5 h-5 rounded-full border-2 border-white dark:border-gray-800 shadow-lg',
    'transition-all duration-200 pointer-events-none hover:scale-110',
    variantColors[variant],
    disabled && 'opacity-50'
  );

  const valueDisplay = showValue ? (
    <div className="mt-2 text-center text-sm text-gray-700 dark:text-gray-300">{currentValue}</div>
  ) : null;

  return (
    <div className={containerClasses} {...rest}>
      <div className={wrapperClasses}>
        {/* Fill track */}
        <div className={fillClasses} style={`width: ${percentage}%`} />

        {/* Thumb */}
        <div className={thumbClasses} style={`left: ${percentage}%`} />

        {/* Hidden range input */}
        <input
          type="range"
          className={inputClasses}
          min={min}
          max={max}
          step={step}
          value={currentValue}
          disabled={disabled}
          onInput={handleChange}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={currentValue}
          aria-disabled={disabled}
        />
      </div>

      {valueDisplay}
    </div>
  );
};

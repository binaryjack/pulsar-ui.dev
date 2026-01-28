/**
 * Toast component
 * Framework: Pulsar
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { IToastProps } from './toast.type';

/**
 * Toast component
 * Individual notification message
 */
export const Toast = ({
  id,
  message,
  variant = 'info',
  duration = 5000,
  onClose,
  className,
  ...rest
}: IToastProps): HTMLElement => {
  let toastElement: HTMLElement | null = null;
  let timeoutId: number | null = null;

  const variantClasses = {
    success: 'bg-green-600 text-white',
    warning: 'bg-yellow-600 text-white',
    error: 'bg-red-600 text-white',
    info: 'bg-blue-600 text-white',
  };

  const handleClose = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (toastElement) {
      toastElement.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => {
        onClose?.(id);
      }, 200);
    }
  };

  // Auto-dismiss after duration
  if (duration > 0) {
    timeoutId = setTimeout(() => {
      handleClose();
    }, duration) as unknown as number;
  }

  return (
    <div
      ref={(el) => (toastElement = el)}
      className={cn(
        'flex items-center justify-between gap-3 px-4 py-3 rounded-lg shadow-lg',
        'min-w-[300px] max-w-md',
        'transition-all duration-200',
        variantClasses[variant],
        className
      )}
      role="alert"
      {...rest}
    >
      <span className="text-sm font-medium">{message}</span>
      <button
        type="button"
        className="flex-shrink-0 text-white hover:opacity-70 transition-opacity"
        onclick={handleClose}
        aria-label="Close"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

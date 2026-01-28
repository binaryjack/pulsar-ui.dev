/**
 * Alert component
 * Framework: Pulsar
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { IAlertProps } from './alert.type';

/**
 * Alert component
 * Displays contextual feedback messages with variants
 */
export const Alert = ({
  variant = 'info',
  closable = false,
  onClose,
  children,
  className,
  ...rest
}: IAlertProps): HTMLElement => {
  let isVisible = true;
  let alertElement: HTMLElement | null = null;

  const variantClasses = {
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
  };

  const handleClose = () => {
    if (alertElement) {
      alertElement.classList.add('opacity-0', 'scale-95');
      setTimeout(() => {
        if (alertElement) {
          alertElement.classList.add('hidden');
        }
        isVisible = false;
        onClose?.();
      }, 200);
    }
  };

  return (
    <div
      ref={(el) => (alertElement = el)}
      className={cn(
        'relative flex items-start gap-3 px-4 py-3 border rounded-lg',
        'transition-all duration-200',
        variantClasses[variant],
        className
      )}
      role="alert"
      {...rest}
    >
      {children}
      {closable && (
        <button
          type="button"
          className="ml-auto text-current hover:opacity-70 transition-opacity"
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
      )}
    </div>
  );
};

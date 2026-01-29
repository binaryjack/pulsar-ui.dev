/**
 * Modal component
 * Framework: Pulsar
 */

import { cn } from '@pulsar-framework/design-tokens';
import { useKeyBindings } from '@pulsar-framework/pulsar.dev';
import type { IModalProps } from './modal.type';

/**
 * Modal component
 * Accessible dialog with sizes, backdrop, and keyboard support
 */
export const Modal = ({
  isOpen = false,
  onClose,
  size = 'md',
  backdrop = true,
  escapeToClose = true,
  children,
  className,
  ...rest
}: IModalProps): HTMLElement => {
  let modalElement: HTMLElement | null = null;
  let backdropElement: HTMLElement | null = null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full m-4',
  };

  const handleClose = () => {
    if (modalElement && backdropElement) {
      modalElement.classList.add('opacity-0', 'scale-95');
      backdropElement.classList.add('opacity-0');

      setTimeout(() => {
        if (modalElement && backdropElement) {
          modalElement.classList.add('hidden');
          backdropElement.classList.add('hidden');
        }
        document.body.style.overflow = '';
        onClose?.();
      }, 200);
    }
  };

  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === backdropElement) {
      handleClose();
    }
  };

  const handleKeyDown = useKeyBindings({
    onEscape: () => {
      if (escapeToClose) {
        handleClose();
      }
    },
  });

  // Apply scroll lock when modal is open
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return (
    <>
      {backdrop && (
        <div
          ref={(el) => (backdropElement = el)}
          className={cn(
            'fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40',
            'transition-opacity duration-200 animate-fade-in',
            !isOpen && 'hidden opacity-0'
          )}
          onclick={handleBackdropClick}
        />
      )}
      <div
        ref={(el) => (modalElement = el)}
        className={cn(
          'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50',
          'w-full bg-white rounded-xl shadow-2xl',
          'transition-all duration-200 animate-scale-in',
          sizeClasses[size],
          !isOpen && 'hidden opacity-0 scale-95',
          className
        )}
        role="dialog"
        aria-modal="true"
        onkeydown={handleKeyDown}
        {...rest}
      >
        {children}
      </div>
    </>
  );
};

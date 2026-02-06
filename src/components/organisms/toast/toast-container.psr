/**
 * ToastContainer component
 * Framework: Pulsar
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { IToastContainerProps } from './toast-container.type';
import { Toast } from './toast';
import type { IToastProps } from './toast.type';

// Singleton queue manager
class ToastQueue {
  private toasts: Array<IToastProps> = [];
  private maxToasts: number = 5;
  private containerElement: HTMLElement | null = null;

  setContainer(element: HTMLElement | null) {
    this.containerElement = element;
  }

  setMaxToasts(max: number) {
    this.maxToasts = max;
  }

  add(toast: IToastProps) {
    // Remove oldest toast if at max capacity
    if (this.toasts.length >= this.maxToasts) {
      this.toasts.shift();
    }

    this.toasts.push(toast);
    this.render();
  }

  remove(id: string) {
    this.toasts = this.toasts.filter((t) => t.id !== id);
    this.render();
  }

  clear() {
    this.toasts = [];
    this.render();
  }

  private render() {
    if (!this.containerElement) return;

    // Clear container
    this.containerElement.innerHTML = '';

    // Render toasts
    this.toasts.forEach((toast) => {
      const toastElement = (
        <Toast
          {...toast}
          onClose={(id) => {
            this.remove(id);
            toast.onClose?.(id);
          }}
        />
      );
      this.containerElement!.appendChild(toastElement);
    });
  }
}

// Singleton instance
const toastQueue = new ToastQueue();

/**
 * ToastContainer component
 * Manages and displays toast notifications
 */
export const ToastContainer = ({
  position = 'top-right',
  maxToasts = 5,
  className,
  ...rest
}: IToastContainerProps): HTMLElement => {
  let containerElement: HTMLElement | null = null;

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
    'bottom-right': 'bottom-4 right-4',
  };

  // Initialize queue with container ref
  const initQueue = (el: HTMLElement | null) => {
    containerElement = el;
    toastQueue.setContainer(el);
    toastQueue.setMaxToasts(maxToasts);
  };

  return (
    <div
      ref={initQueue}
      className={cn('fixed z-50 flex flex-col gap-2', positionClasses[position], className)}
      {...rest}
    />
  );
};

// Export singleton queue manager
export { toastQueue };

/**
 * useToast hook
 * Framework: Pulsar
 */

import { toastQueue } from './toast-container';
import type { ToastOptions } from './toast-options.type';

let toastIdCounter = 0;

/**
 * useToast hook
 * Provides methods to show and dismiss toast notifications
 */
export const useToast = () => {
  const generateId = () => `toast-${++toastIdCounter}`;

  const toast = (options: ToastOptions) => {
    const id = generateId();
    toastQueue.add({
      id,
      message: options.message,
      variant: options.variant || 'info',
      duration: options.duration !== undefined ? options.duration : 5000,
    });
    return id;
  };

  const success = (message: string, duration?: number) => {
    return toast({ message, variant: 'success', duration });
  };

  const warning = (message: string, duration?: number) => {
    return toast({ message, variant: 'warning', duration });
  };

  const error = (message: string, duration?: number) => {
    return toast({ message, variant: 'error', duration });
  };

  const info = (message: string, duration?: number) => {
    return toast({ message, variant: 'info', duration });
  };

  const dismiss = (id: string) => {
    toastQueue.remove(id);
  };

  const dismissAll = () => {
    toastQueue.clear();
  };

  return {
    toast,
    success,
    warning,
    error,
    info,
    dismiss,
    dismissAll,
  };
};

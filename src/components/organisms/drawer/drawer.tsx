/**
 * Drawer component - Side panel overlay
 */

import { cn } from '@pulsar-framework/design-tokens';
import { Portal, useEffect } from '@pulsar-framework/pulsar.dev';
import type { IDrawerProps } from './drawer.type';

export const Drawer = ({
  open,
  onClose,
  placement = 'right',
  size = 'md',
  showBackdrop = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  children,
  class: className,
  ...rest
}: IDrawerProps): HTMLElement => {
  // Handle escape key
  useEffect(() => {
    if (!open || !closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [open, closeOnEscape, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [open]);

  if (!open) return <div style="display: none;" />;

  // Size classes
  const sizeClasses = {
    sm: placement === 'left' || placement === 'right' ? 'w-64' : 'h-64',
    md: placement === 'left' || placement === 'right' ? 'w-96' : 'h-96',
    lg: placement === 'left' || placement === 'right' ? 'w-[32rem]' : 'h-[32rem]',
    xl: placement === 'left' || placement === 'right' ? 'w-[48rem]' : 'h-[48rem]',
    full: placement === 'left' || placement === 'right' ? 'w-full' : 'h-full',
  };

  // Placement classes
  const placementClasses = {
    left: 'left-0 top-0 h-full',
    right: 'right-0 top-0 h-full',
    top: 'top-0 left-0 w-full',
    bottom: 'bottom-0 left-0 w-full',
  };

  // Transform classes for slide animation
  const transformClasses = {
    left: open ? 'translate-x-0' : '-translate-x-full',
    right: open ? 'translate-x-0' : 'translate-x-full',
    top: open ? 'translate-y-0' : '-translate-y-full',
    bottom: open ? 'translate-y-0' : 'translate-y-full',
  };

  const backdropClasses = cn(
    'fixed inset-0 bg-black/60 backdrop-blur-sm z-40',
    'transition-opacity duration-300 animate-fade-in',
    open ? 'opacity-100' : 'opacity-0'
  );

  const drawerClasses = cn(
    'fixed z-50 bg-white dark:bg-gray-800 shadow-2xl',
    'transition-all duration-300 ease-in-out',
    'overflow-y-auto overflow-x-hidden',
    sizeClasses[size],
    placementClasses[placement],
    transformClasses[placement],
    className
  );

  const backdrop = showBackdrop ? (
    <div
      className={backdropClasses}
      onClick={() => closeOnBackdropClick && onClose()}
      aria-hidden="true"
    />
  ) : null;

  return (
    <Portal>
      {backdrop}
      <div
        className={drawerClasses}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        {...rest}
      >
        {children}
      </div>
    </Portal>
  );
};

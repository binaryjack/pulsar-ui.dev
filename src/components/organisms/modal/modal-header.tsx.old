/**
 * ModalHeader component
 * Framework: Pulsar
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { IModalHeaderProps } from './modal-header.type';

/**
 * ModalHeader component
 * Header section for Modal component
 */
export const ModalHeader = ({ children, className, ...rest }: IModalHeaderProps): HTMLElement => {
  return (
    <div
      className={cn(
        'flex items-center justify-between px-6 py-4 border-b border-neutral-200',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

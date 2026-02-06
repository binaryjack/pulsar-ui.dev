/**
 * ModalFooter component
 * Framework: Pulsar
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { IModalFooterProps } from './modal-footer.type';

/**
 * ModalFooter component
 * Footer section for Modal component
 */
export const ModalFooter = ({ children, className, ...rest }: IModalFooterProps): HTMLElement => {
  return (
    <div
      className={cn(
        'flex items-center justify-end gap-2 px-6 py-4 border-t border-neutral-200',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

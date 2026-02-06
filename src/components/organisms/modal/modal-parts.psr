/**
 * Modal Parts Components
 * Header, Body, and Footer components for Modal
 */

import type { IModalBodyProps } from './modal-body.type';
import type { IModalFooterProps } from './modal-footer.type';
import type { IModalHeaderProps } from './modal-header.type';
import './modal.css';

export const ModalHeader = ({ children, className }: IModalHeaderProps) => {
  return <div className={`modal-header${className ? ` ${className}` : ''}`}>{children}</div>;
};

export const ModalBody = ({ children, className }: IModalBodyProps) => {
  return <div className={`modal-body${className ? ` ${className}` : ''}`}>{children}</div>;
};

export const ModalFooter = ({ children, className }: IModalFooterProps) => {
  return <div className={`modal-footer${className ? ` ${className}` : ''}`}>{children}</div>;
};

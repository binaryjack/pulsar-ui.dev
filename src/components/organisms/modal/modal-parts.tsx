/**
 * Modal Parts Components
 * Header, Body, and Footer components for Modal
 */

import type {
  IModalBodyProps,
  IModalFooterProps,
  IModalHeaderProps,
} from './modal-props.interface';
import './modal.css';

export const ModalHeader = ({ children, class: className }: IModalHeaderProps) => {
  return <div className={`modal-header${className ? ` ${className}` : ''}`}>{children}</div>;
};

export const ModalBody = ({ children, class: className }: IModalBodyProps) => {
  return <div className={`modal-body${className ? ` ${className}` : ''}`}>{children}</div>;
};

export const ModalFooter = ({ children, class: className }: IModalFooterProps) => {
  return <div className={`modal-footer${className ? ` ${className}` : ''}`}>{children}</div>;
};

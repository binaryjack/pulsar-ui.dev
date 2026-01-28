/**
 * Modal Parts Components
 * Header, Body, and Footer components for Modal
 */

import type {
  IModalHeaderProps,
  IModalBodyProps,
  IModalFooterProps,
} from './modal-props.interface';
import './modal.css';

export const ModalHeader = ({ children, class: className }: IModalHeaderProps) => {
  return <div class={`modal-header${className ? ` ${className}` : ''}`}>{children}</div>;
};

export const ModalBody = ({ children, class: className }: IModalBodyProps) => {
  return <div class={`modal-body${className ? ` ${className}` : ''}`}>{children}</div>;
};

export const ModalFooter = ({ children, class: className }: IModalFooterProps) => {
  return <div class={`modal-footer${className ? ` ${className}` : ''}`}>{children}</div>;
};

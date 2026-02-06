/**
 * Dropdown Item Component
 * Individual dropdown menu item
 */

import type { IDropdownItemProps } from './dropdown-item.type';
import './dropdown.css';

export const DropdownItem = ({
  children,
  onclick,
  disabled = false,
  className,
}: IDropdownItemProps) => {
  const handleClick = (e: MouseEvent) => {
    if (disabled) return;
    onclick?.(e);
  };

  return (
    <button
      className={`dropdown-item state-layer touch-target${disabled ? ' dropdown-item-disabled' : ''}${className ? ` ${className}` : ''}`}
      onclick={handleClick}
      disabled={disabled}
      type="button"
    >
      <span className="dropdown-item-label">{children}</span>
    </button>
  );
};

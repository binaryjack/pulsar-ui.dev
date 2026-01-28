/**
 * Dropdown Item Component
 * Individual dropdown menu item
 */

import type { IDropdownItemProps } from './dropdown-props.interface';
import './dropdown.css';

export const DropdownItem = ({
  children,
  onClick,
  disabled = false,
  divider = false,
  icon,
  class: className,
}: IDropdownItemProps) => {
  const handleClick = (e: MouseEvent) => {
    if (disabled) return;
    onClick?.(e);
  };

  return (
    <>
      <button
        class={`dropdown-item${disabled ? ' dropdown-item-disabled' : ''}${className ? ` ${className}` : ''}`}
        onClick={handleClick}
        disabled={disabled}
        type="button"
      >
        {icon && <span class="dropdown-item-icon">{icon}</span>}
        <span class="dropdown-item-label">{children}</span>
      </button>
      {divider && <div class="dropdown-divider" />}
    </>
  );
};

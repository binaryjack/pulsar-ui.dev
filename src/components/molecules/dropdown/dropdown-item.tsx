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
        className={`dropdown-item state-layer touch-target${disabled ? ' dropdown-item-disabled' : ''}${className ? ` ${className}` : ''}`}
        onClick={handleClick}
        disabled={disabled}
        type="button"
      >
        {icon && <span className="dropdown-item-icon">{icon}</span>}
        <span className="dropdown-item-label">{children}</span>
      </button>
      {divider && <div className="dropdown-divider" />}
    </>
  );
};

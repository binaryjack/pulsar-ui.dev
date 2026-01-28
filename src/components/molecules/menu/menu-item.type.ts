/**
 * MenuItem component type definition
 */

export interface IMenuItemProps {
  icon?: HTMLElement;
  disabled?: boolean;
  onClick?: () => void;
  children: HTMLElement | string | (HTMLElement | string)[];
  class?: string;
  [key: string]: unknown;
}

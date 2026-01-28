/**
 * Tab component type definition
 */

export interface ITabProps {
  id: string;
  isActive?: boolean;
  onClick?: (id: string) => void;
  disabled?: boolean;
  children: HTMLElement | string;
  class?: string;
  [key: string]: unknown;
}

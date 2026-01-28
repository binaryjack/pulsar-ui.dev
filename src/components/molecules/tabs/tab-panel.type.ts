/**
 * TabPanel component type definition
 */

export interface ITabPanelProps {
  id: string;
  isActive?: boolean;
  children: HTMLElement | string | (HTMLElement | string)[];
  class?: string;
  [key: string]: unknown;
}

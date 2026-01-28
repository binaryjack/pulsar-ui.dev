/**
 * ListItem component type definition
 */

export interface IListItemProps {
  icon?: HTMLElement;
  children: HTMLElement | string | (HTMLElement | string)[];
  class?: string;
  [key: string]: unknown;
}

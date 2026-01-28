/**
 * Dropdown component props interface
 */

export interface IDropdownProps extends Pulsar.HtmlExtends<'div'> {
  readonly isOpen?: boolean;
  readonly onToggle?: (isOpen: boolean) => void;
  readonly triggerElement: JSX.Element;
  readonly children: JSX.Children;
}

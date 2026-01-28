/**
 * DropdownItem component props interface
 */

export interface IDropdownItemProps extends Pulsar.HtmlExtends<'button'> {
  readonly onclick?: (event: MouseEvent) => void;
  readonly disabled?: boolean;
  readonly children: JSX.Children;
}

import type { Pulsar } from '@synetics/synetics.dev';

/**
 * Dropdown component props interface
 */

export interface IDropdownProps extends Pulsar.HtmlExtends<'div'> {
  readonly isOpen?: boolean;
  readonly onToggle?: (isOpen: boolean) => void;
  readonly triggerElement: any;
  readonly children: any;
}

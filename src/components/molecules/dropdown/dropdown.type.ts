import type { Pulsar } from '@pulsar-framework/pulsar.dev';

/**
 * Dropdown component props interface
 */

export interface IDropdownProps extends Pulsar.HtmlExtends<'div'> {
  readonly isOpen?: boolean;
  readonly onToggle?: (isOpen: boolean) => void;
  readonly triggerElement: any;
  readonly children: any;
}

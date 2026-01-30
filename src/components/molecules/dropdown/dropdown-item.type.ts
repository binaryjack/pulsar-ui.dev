/**
 * DropdownItem component props interface
 */

import type { Pulsar } from '@pulsar-framework/pulsar.dev';

export interface IDropdownItemProps extends Pulsar.HtmlExtends<'button'> {
  readonly onclick?: (event: MouseEvent) => void;
  readonly disabled?: boolean;
  readonly children: any;
}

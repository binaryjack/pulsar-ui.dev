/**
 * Popover component props interface
 */

import type { PopoverPlacement } from '../../enums/popover-placement.type';
import type { PopoverTrigger } from '../../enums/popover-trigger.type';

export interface IPopoverProps extends Pulsar.HtmlExtends<'div'> {
  readonly trigger?: PopoverTrigger;
  readonly placement?: PopoverPlacement;
  readonly isOpen?: boolean;
  readonly onToggle?: (isOpen: boolean) => void;
  readonly triggerElement: JSX.Element;
  readonly children: JSX.Children;
}

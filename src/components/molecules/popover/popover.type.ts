/**
 * Popover component props interface
 */

import type { Pulsar } from '@pulsar-framework/pulsar.dev';
import type { PopoverPlacement } from '../../enums/popover-placement.type';
import type { PopoverTrigger } from '../../enums/popover-trigger.type';

/**
 * Popover component props
 * Extends Pulsar.HtmlExtends<'div'> which includes className property
 */
export interface IPopoverProps extends Pulsar.HtmlExtends<'div'> {
  readonly trigger?: PopoverTrigger;
  readonly placement?: PopoverPlacement;
  readonly isOpen?: boolean;
  readonly onToggle?: (isOpen: boolean) => void;
  readonly triggerElement: JSX.Element;
  readonly children: JSX.Children;
}

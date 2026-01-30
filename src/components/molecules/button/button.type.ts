/**
 * Button component props interface
 * [COPILOT] this is a simple button atomic component
 * [COPILOT] for complex buttons with icons, labels, spinners - use molecules
 */

import type { Pulsar } from '@pulsar-framework/pulsar.dev';
import { type ButtonType } from '../../enums/button-type.type';
import { type IComponentConfig } from '../../utils/component-config-builder/component-config.type';
import { type IComponentStyling } from '../../utils/component-styling-builder/component-styling.type';

export interface IButtonProps extends Pulsar.HtmlExtends<'button'> {
  // Component configuration
  readonly config?: IComponentConfig;

  // Component styling
  readonly styling?: IComponentStyling;

  // Button behavior
  readonly type?: ButtonType;

  // Button content
  readonly children?: any;
}

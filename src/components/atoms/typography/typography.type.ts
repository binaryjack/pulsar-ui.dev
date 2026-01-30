/**
 * Typography component props interface
 * [COPILOT] this is an unique component
 * [COPILOT] this component can take a DOM Tag as main render TAG
 * [COPILOT] can have default unset value / empty / null
 * [COPILOT] can be truncated, wrapped, elipsis
 * [COPILOT] can be user-select restricted (default unset)
 * [COPILOT] can have a default skeletton behavior on Loading (reuse available skeletton component) that replaces the actual component in loading time
 * [COPILOT] it must contains all regular ARIA that could be expected for this kid of component
 */

import type { Pulsar } from '@pulsar-framework/pulsar.dev';
import { type TypographyTag } from '../../enums/typography-tag.type';
import { type TypographyVariant } from '../../enums/typography-variant.type';
import { type IComponentConfig } from '../../utils/component-config-builder/component-config.type';
import { type IComponentStyling } from '../../utils/component-styling-builder/component-styling.type';

export interface ITypographyProps extends Pulsar.HtmlExtends<'span'> {
  // Component configuration
  readonly config?: IComponentConfig;

  // Component styling
  readonly styling?: IComponentStyling;

  // Typography settings
  readonly tag?: TypographyTag;
  readonly variant?: TypographyVariant;

  // Text behavior
  readonly truncate?: boolean;
  readonly noWrap?: boolean;
  readonly userSelect?: boolean;

  // Content
  readonly children?: any;
}

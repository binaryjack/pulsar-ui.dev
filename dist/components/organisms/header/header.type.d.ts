/**
 * Header component props interface
 * Organism: Page header with logo, navigation, and actions
 */
import type { Pulsar } from 'pulsar';
import { type IComponentConfig } from '../../utils/component-config-builder/component-config.type';
import { type IComponentStyling } from '../../utils/component-styling-builder/component-styling.type';
export interface IHeaderProps extends Pulsar.HtmlExtends<'header'> {
    readonly config?: IComponentConfig;
    readonly styling?: IComponentStyling;
    readonly logo?: HTMLElement;
    readonly navigation?: HTMLElement;
    readonly actions?: HTMLElement;
    readonly sticky?: boolean;
}
//# sourceMappingURL=header.type.d.ts.map
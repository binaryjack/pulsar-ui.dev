/**
 * Card component props interface
 * Organism: Composes header, body, footer sections
 */
import type { Pulsar } from 'pulsar';
import { type IComponentConfig } from '../../utils/component-config-builder/component-config.type';
import { type IComponentStyling } from '../../utils/component-styling-builder/component-styling.type';
export interface ICardProps extends Pulsar.HtmlExtends<'div'> {
    readonly config?: IComponentConfig;
    readonly styling?: IComponentStyling;
    readonly header?: HTMLElement;
    readonly footer?: HTMLElement;
    readonly children?: JSX.Children;
    readonly elevation?: boolean;
    readonly bordered?: boolean;
}
//# sourceMappingURL=card.type.d.ts.map
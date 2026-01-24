/**
 * Badge component props interface
 * Molecule: Composes icon + text content
 */
import type { Pulsar } from 'pulsar';
import { type IComponentConfig } from '../../utils/component-config-builder/component-config.type';
import { type IComponentStyling } from '../../utils/component-styling-builder/component-styling.type';
export interface IBadgeProps extends Pulsar.HtmlExtends<'span'> {
    readonly config?: IComponentConfig;
    readonly styling?: IComponentStyling;
    readonly label?: string;
    readonly children?: string | number | HTMLElement | Array<string | number | HTMLElement>;
    readonly icon?: HTMLElement;
    readonly iconPosition?: 'left' | 'right';
    readonly dot?: boolean;
}
//# sourceMappingURL=badge.type.d.ts.map
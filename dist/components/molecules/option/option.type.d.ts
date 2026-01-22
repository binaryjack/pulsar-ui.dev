/**
 * Option component props interface
 * Molecule: Option element for select dropdowns
 */
import type { Pulsar } from 'pulsar';
import { type IComponentConfig } from '../../utils/component-config-builder/component-config.type';
import { type IComponentStyling } from '../../utils/component-styling-builder/component-styling.type';
export interface IOptionProps extends Pulsar.HtmlExtends<'option'> {
    readonly config?: IComponentConfig;
    readonly name?: string;
    readonly styling?: IComponentStyling;
    readonly value?: string;
    readonly label?: string;
    readonly children?: JSX.Children;
    readonly selected?: boolean;
}
//# sourceMappingURL=option.type.d.ts.map
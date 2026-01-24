/**
 * Label component props interface
 * Molecule: Composes Typography with form input
 */
import type { Pulsar } from 'pulsar';
import { type IComponentConfig } from '../../utils/component-config-builder/component-config.type';
import { type IComponentStyling } from '../../utils/component-styling-builder/component-styling.type';
export interface ILabelProps extends Pulsar.HtmlExtends<'label'> {
    readonly config?: IComponentConfig;
    readonly styling?: IComponentStyling;
    readonly text: string;
    readonly htmlFor?: string;
    readonly required?: boolean;
    readonly disabled?: boolean;
    readonly helperText?: string;
    readonly errorText?: string;
}
//# sourceMappingURL=label.type.d.ts.map
/**
 * RadioGroup component props interface
 * Molecule: Composes multiple Radio atoms
 */
import type { Pulsar } from 'pulsar';
import { type IComponentConfig } from '../../utils/component-config-builder/component-config.type';
import { type IComponentStyling } from '../../utils/component-styling-builder/component-styling.type';
import { type IRadioOption } from './radio-option.type';
export interface IRadioGroupProps extends Pulsar.HtmlExtends<'div'> {
    readonly config?: IComponentConfig;
    readonly styling?: IComponentStyling;
    readonly name: string;
    readonly options: readonly IRadioOption[];
    readonly value?: string;
    readonly defaultValue?: string;
    readonly orientation?: 'horizontal' | 'vertical';
    readonly onChange?: (value: string) => void;
}
//# sourceMappingURL=radio-group.type.d.ts.map
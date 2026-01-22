/**
 * Select component props interface
 * Organism: Native select element with options
 */
import type { Pulsar } from 'pulsar';
import { type IComponentConfig } from '../../utils/component-config-builder/component-config.type';
import { type IComponentStyling } from '../../utils/component-styling-builder/component-styling.type';
import { type ISelectOption } from './select-option.type';
export interface ISelectProps extends Omit<Pulsar.HtmlExtends<'select'>, 'value' | 'defaultValue' | 'options'> {
    readonly config?: IComponentConfig;
    readonly styling?: IComponentStyling;
    readonly options: readonly ISelectOption[];
    readonly value?: string;
    readonly defaultValue?: string;
    readonly placeholder?: string;
    readonly ariaLabel?: string;
    readonly onChange?: (value: string) => void;
}
//# sourceMappingURL=select.type.d.ts.map
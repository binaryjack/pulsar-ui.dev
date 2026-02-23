/**
 * DatePicker v3 - Main Export
 *
 * Standalone DatePicker component without FORMULAR dependencies.
 */

export { default as DatePickerV3, default } from './date-picker.psr';

// Export types and enums
export type { DatePickerGridModeType, DatePickerSelectionModeType } from './core/date-picker.types';
export type { DatePickerProps } from './date-picker.psr';
export { DateFormatsEnum } from './utils/date-utils';

// Export utilities (if needed)
export { cx, ifClass, newIFClass } from './utils/class-utils';
export { formatDate, fromINDate, parseDate, toINDate } from './utils/date-utils';

// Export hooks (if needed)
export { useObjectRef } from './hooks/use-object-ref';

// Export Toggleable (if needed separately)
export { useToggleableContext } from './toggleable/toggleable.context.hook';
export { Toggleable } from './toggleable/toggleable.psr';

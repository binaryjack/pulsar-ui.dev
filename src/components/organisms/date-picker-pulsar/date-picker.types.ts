/**
 * DatePicker main component types
 */
import type { DateFormatsEnum } from './utils';

export interface IDatePickerProps {
  // Value and change handling
  value?: Date;
  onChange?: (date: Date) => void;

  // Date constraints (component-level validation)
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  isDateDisabled?: (date: Date) => boolean;

  // Display options
  format?: DateFormatsEnum | string;
  placeholder?: string;

  // Styling
  className?: string;
  disabled?: boolean;
}

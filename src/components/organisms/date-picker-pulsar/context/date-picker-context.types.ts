/**
 * DatePicker context types
 */
import type { DatePickerDisplayType } from '../core';

export interface IDatePickerContext {
  // Reactive state
  selectedDate: () => Date | null;
  displayDate: () => Date;
  displayType: () => DatePickerDisplayType;
  isOpen: () => boolean;

  // Actions
  setSelectedDate: (date: Date | null) => void;
  setDisplayDate: (date: Date) => void;
  setDisplayType: (type: DatePickerDisplayType) => void;
  toggle: () => void;
  open: () => void;
  close: () => void;

  // Date validation (component-level)
  isDateDisabled: (date: Date) => boolean;
  isDateSelectable: (date: Date) => boolean;
  isInRange: (date: Date) => boolean;

  // Configuration
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
}

export interface IDatePickerProviderProps {
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  isDateDisabled?: (date: Date) => boolean;
  initialDate?: Date;
  onChange?: (date: Date) => void;
}

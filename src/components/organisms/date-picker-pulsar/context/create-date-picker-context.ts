/**
 * DatePicker context implementation using Pulsar signals
 */
import { useState } from 'pulsar';
import { useToggleable } from 'pulsar';
import type { DatePickerDisplayType } from '../core';
import { getTs } from '../utils';
import type { IDatePickerContext, IDatePickerProviderProps } from './date-picker-context.types';

export const createDatePickerContext = (props: IDatePickerProviderProps): IDatePickerContext => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(props.initialDate ?? null);
  const [displayDate, setDisplayDate] = useState<Date>(props.initialDate ?? new Date());
  const [displayType, setDisplayType] = useState<DatePickerDisplayType>('DAY');

  const { isOpen, toggle, open, close } = useToggleable();

  // Date validation logic
  const isDateDisabled = (date: Date): boolean => {
    // Custom validator takes precedence
    if (props.isDateDisabled) {
      return props.isDateDisabled(date);
    }

    // Check disabled dates array
    if (props.disabledDates) {
      const targetTs = getTs(date);
      return props.disabledDates.some((disabled) => getTs(disabled) === targetTs);
    }

    return false;
  };

  const isInRange = (date: Date): boolean => {
    const targetTs = getTs(date);

    if (props.minDate && targetTs < getTs(props.minDate)) {
      return false;
    }

    if (props.maxDate && targetTs > getTs(props.maxDate)) {
      return false;
    }

    return true;
  };

  const isDateSelectable = (date: Date): boolean => {
    return isInRange(date) && !isDateDisabled(date);
  };

  // Wrap setSelectedDate to call onChange
  const handleSetSelectedDate = (date: Date | null) => {
    setSelectedDate(date);
    if (date && props.onChange) {
      props.onChange(date);
    }
  };

  return {
    selectedDate,
    displayDate,
    displayType,
    isOpen,
    setSelectedDate: handleSetSelectedDate,
    setDisplayDate,
    setDisplayType,
    toggle,
    open,
    close,
    isDateDisabled,
    isDateSelectable,
    isInRange,
    minDate: props.minDate,
    maxDate: props.maxDate,
    disabledDates: props.disabledDates,
  };
};

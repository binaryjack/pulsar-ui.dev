/**
 * Constructor functions for DatePicker models
 */
import type { IDateObject } from '../utils/date.types';
import type {
  IDatePickerCell,
  IDatePickerItem,
  IDatePickerOptions,
  IDatePickerRow,
} from './date-picker.models';

export const newDatePickerItem = (
  id: string,
  date: IDateObject,
  option: Partial<IDatePickerOptions>
): IDatePickerItem => {
  return {
    id,
    date,
    selected: option.selected ?? false,
    active: option.active ?? false,
    isNextScope: option.isNextScope ?? false,
    isPreviousScope: option.isPreviousScope ?? false,
    isCurrentScope: option.isCurrentScope ?? false,
    isRangeDays: option.isRangeDays ?? false,
    isWeekEnd: option.isWeekEnd ?? false,
    isNow: option.isNow ?? false,
    displayType: option.displayType ?? 'DAY',
  };
};

export const newCell = (id: number, item: IDatePickerItem | null): IDatePickerCell => {
  const dtePrint = item
    ? `${item.date.year}${item.date.month.toString().padStart(2, '0')}${item.date.day.toString().padStart(2, '0')}`
    : undefined;
  return {
    id,
    code: dtePrint,
    ts: dtePrint ? parseInt(dtePrint) : 0,
    item,
  };
};

export const newCellsRow = (id: number, cells: IDatePickerCell[]): IDatePickerRow => {
  return { id, cells };
};

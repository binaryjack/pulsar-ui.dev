/**
 * Core models for DatePicker
 */
import type { IDateObject } from '../utils/date.types';
import type { DatePickerDisplayType } from './date-picker-display-type';

export interface ICursorPosition {
  currentID: number;
  x: number;
  y: number;
}

export interface IDatePickerOptions {
  selected: boolean;
  active: boolean;
  isNextScope: boolean;
  isPreviousScope: boolean;
  isCurrentScope: boolean;
  isRangeDays: boolean;
  isWeekEnd: boolean;
  isNow: boolean;
  displayType: DatePickerDisplayType;
}

export interface IDatePickerItem {
  id: string;
  date: IDateObject;
  selected: boolean;
  active: boolean;
  isNextScope: boolean;
  isPreviousScope: boolean;
  isCurrentScope: boolean;
  isRangeDays: boolean;
  isWeekEnd: boolean;
  isNow: boolean;
  displayType: DatePickerDisplayType;
}

export interface IDatePickerCell {
  id: number;
  code: string | undefined;
  ts: number;
  item: IDatePickerItem | null;
}

export interface IDatePickerRow {
  id: number;
  cells: IDatePickerCell[];
}

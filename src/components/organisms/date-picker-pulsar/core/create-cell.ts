/**
 * Create a date picker cell
 */
import { DateObject } from '../utils/date-object';
import type { IDatePickerCell, IDatePickerOptions } from './date-picker.models';
import { newCell, newDatePickerItem } from './date-picker-constructors';

export const createCell = (
  day: number,
  month: number,
  year: number,
  options: Partial<IDatePickerOptions>,
  defineWeekEnds?: boolean
): IDatePickerCell => {
  const key = `${month}${day}`;
  const cDate = new Date(year, month, day);
  const isWeekEnd = defineWeekEnds ? [6, 0].includes(cDate.getDay()) : false;
  const nowDate = new Date()?.toLocaleString(undefined, {
    dateStyle: 'short',
  });
  const currentCellDate = cDate.toLocaleDateString(undefined, {
    dateStyle: 'short',
  });

  const isNow = nowDate === currentCellDate;

  const dateObjectInstance = new DateObject(cDate, key);
  const dpItem = newDatePickerItem(key, dateObjectInstance, { ...options, isWeekEnd, isNow });
  return newCell(day, dpItem);
};

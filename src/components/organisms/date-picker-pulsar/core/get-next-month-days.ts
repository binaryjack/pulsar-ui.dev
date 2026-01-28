/**
 * Get days from next month to fill calendar grid
 */
import { createCell } from './create-cell';
import type { IDatePickerCell } from './date-picker.models';

export const getNextMonthDays = (
  remainingDays: number,
  currentMonth: number,
  year: number
): IDatePickerCell[] => {
  const output: IDatePickerCell[] = [];
  for (let i = 1; i <= remainingDays + 14; i++) {
    const cell = createCell(i, currentMonth + 1, year, {
      isNextScope: true,
    });
    output.push(cell);
  }
  return output;
};

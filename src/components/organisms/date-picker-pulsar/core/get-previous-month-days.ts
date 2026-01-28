/**
 * Get days from previous month to fill calendar grid
 */
import { createCell } from './create-cell';
import type { IDatePickerCell } from './date-picker.models';

export const getPreviousMonthDays = (
  remainingDays: number,
  currentMonth: number,
  year: number
): IDatePickerCell[] => {
  const lastDay = new Date(year, currentMonth, 0).getDate();
  const output: IDatePickerCell[] = [];
  if (remainingDays === 0) return output;
  for (let i = lastDay; i > 0; i--) {
    const cell = createCell(i, currentMonth - 1, year, {
      isPreviousScope: true,
    });

    output.push(cell);
    if (output.length === remainingDays) {
      break;
    }
  }
  return output.sort((a, b) => a.id - b.id);
};

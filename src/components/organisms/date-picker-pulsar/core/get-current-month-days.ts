/**
 * Get days from current month
 */
import { createCell } from './create-cell';
import type { IDatePickerCell } from './date-picker.models';

export const getCurrentMonthDays = (month: number, year: number): IDatePickerCell[] => {
  // If you provide 0 as the dayValue in Date.setFullYear you get the last day of the previous month
  const lastDay = new Date(year, month + 1, 0).getDate();
  const output: IDatePickerCell[] = [];
  for (let i = 1; i < lastDay + 1; i++) {
    const cell = createCell(
      i,
      month,
      year,
      {
        isCurrentScope: true,
      },
      true
    );
    output.push(cell);
  }
  return output;
};

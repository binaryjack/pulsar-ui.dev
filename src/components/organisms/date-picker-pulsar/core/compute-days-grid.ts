/**
 * Compute days grid for date picker calendar
 */
import { getCurrentMonthDays } from './get-current-month-days';
import { getNextMonthDays } from './get-next-month-days';
import { getPreviousMonthDays } from './get-previous-month-days';
import type { IDatePickerRow } from './date-picker.models';
import { newCellsRow } from './date-picker-constructors';

export const computeDaysGrid = (dte: Date): IDatePickerRow[] => {
  const year = dte.getFullYear();
  const currentMonth = dte.getMonth();
  const daysArray = [1, 2, 3, 4, 5, 6, 0];

  const firstDay = new Date(year, currentMonth, 1).getDay();
  const nextMonthFirstDay = new Date(year, currentMonth + 1, 1).getDay();
  const output: IDatePickerRow[] = [];

  // How many days from previous month to complete first week row
  const previousDaysRemaining = daysArray.indexOf(firstDay);
  // How many days from next month to complete last week row
  const nextMonthDaysRemaining = Math.abs(daysArray.indexOf(nextMonthFirstDay) - daysArray.length);

  // Get previous month's days
  const previousDays = getPreviousMonthDays(previousDaysRemaining, currentMonth, year);
  // Get current month's days
  const currentDays = getCurrentMonthDays(currentMonth, year);
  // Get next month's days
  const nextMonthDays = getNextMonthDays(nextMonthDaysRemaining, currentMonth, year);

  // Build full grid data combining the three collections
  const fullGridData = [...previousDays, ...currentDays, ...nextMonthDays];

  // Split into week rows
  for (let row = 1; row < 7; row++) {
    const weekDays = fullGridData.splice(0, 7);
    const newRow = newCellsRow(row, weekDays);
    output.push(newRow);
  }

  return output;
};

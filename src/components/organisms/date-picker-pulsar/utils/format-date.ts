/**
 * Format a date or INDate object to string
 */
import { DateFormatsEnum } from './date-formats.enum';
import type { INDate } from './date.types';

export const formatDate = (
  date: Date | INDate | undefined,
  format: DateFormatsEnum | string = DateFormatsEnum.DD_MM_YYYY,
  separator?: string
): string => {
  if (!date) return '';

  let day: number, month: number, year: number;

  if (date instanceof Date) {
    // Check for invalid date
    if (isNaN(date.getTime())) return '';

    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
  } else if ('day' in date && 'month' in date && 'year' in date) {
    day = date.day;
    month = date.month + 1;
    year = date.year;
  } else {
    return '';
  }

  // Check for NaN values
  if (isNaN(day) || isNaN(month) || isNaN(year)) return '';

  const dd = day.toString().padStart(2, '0');
  const MM = month.toString().padStart(2, '0');
  const yyyy = year.toString();

  // Replace format placeholders
  let result = format
    .replace('dd', dd)
    .replace('DD', dd)
    .replace('MM', MM)
    .replace('yyyy', yyyy)
    .replace('YYYY', yyyy);

  // Only apply custom separator if explicitly provided
  if (separator !== undefined) {
    const formatHasSlash = format.includes('/');
    const formatHasDash = format.includes('-');

    if (formatHasSlash) {
      result = result.replace(/\//g, separator);
    } else if (formatHasDash) {
      result = result.replace(/-/g, separator);
    }
  }

  return result;
};

/**
 * Parse a date string to Date object
 */
import { DateFormatsEnum } from './date-formats.enum';

export const parseDate = (
  dateString: string,
  format: DateFormatsEnum | string = DateFormatsEnum.DD_MM_YYYY
): Date | null => {
  if (!dateString) return null;

  const separator = format.includes('/') ? '/' : format.includes('-') ? '-' : ' ';
  const parts = dateString.split(separator);
  const formatParts = format.split(separator);

  if (parts.length !== formatParts.length) return null;

  let day = 1,
    month = 0,
    year = new Date().getFullYear();

  formatParts.forEach((part, index) => {
    const value = parseInt(parts[index], 10);
    if (isNaN(value)) return;

    if (part.toLowerCase().includes('d')) day = value;
    else if (part.toLowerCase().includes('m')) month = value - 1;
    else if (part.toLowerCase().includes('y')) year = value;
  });

  const date = new Date(year, month, day);

  // Validate the parsed date
  if (isNaN(date.getTime())) return null;
  if (date.getDate() !== day || date.getMonth() !== month || date.getFullYear() !== year) {
    return null;
  }

  return date;
};

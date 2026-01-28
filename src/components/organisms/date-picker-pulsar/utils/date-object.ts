/**
 * DateObject class implementation following prototype pattern
 */
import type { IDateObject } from './date.types';

export const DateObject = function (this: IDateObject, date: Date, key: string) {
  Object.defineProperty(this, 'day', {
    value: date.getDate(),
    writable: false,
    enumerable: true,
  });

  Object.defineProperty(this, 'month', {
    value: date.getMonth(),
    writable: false,
    enumerable: true,
  });

  Object.defineProperty(this, 'year', {
    value: date.getFullYear(),
    writable: false,
    enumerable: true,
  });

  Object.defineProperty(this, 'key', {
    value: key,
    writable: false,
    enumerable: true,
  });
} as unknown as { new (date: Date, key: string): IDateObject };

DateObject.prototype.toDate = function (this: IDateObject): Date {
  return new Date(this.year, this.month, this.day);
};

DateObject.prototype.toString = function (this: IDateObject): string {
  return `${this.year}-${String(this.month + 1).padStart(2, '0')}-${String(this.day).padStart(2, '0')}`;
};

/**
 * Get timestamp from a date (set to midnight UTC)
 */
export const getTs = (date: Date): number => {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return d.getTime();
};

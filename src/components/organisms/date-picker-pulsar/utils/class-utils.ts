/**
 * Utility functions for className management in DatePicker
 */
import type { IFClass } from './date.types';

export const newIFClass = (className: string, condition?: boolean): IFClass => ({
  className,
  condition: condition ?? false,
});

export const ifClass = (conditions: IFClass[]): string => {
  return conditions
    .filter((c) => c.condition)
    .map((c) => c.className)
    .join(' ');
};

export const cx = (...classNames: (string | undefined | null | false)[]): string => {
  return classNames.filter(Boolean).join(' ');
};

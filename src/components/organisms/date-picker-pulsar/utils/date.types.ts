/**
 * Date-related type definitions
 */
export interface INDate {
  day: number;
  month: number;
  year: number;
}

export interface IDateObject {
  day: number;
  month: number;
  year: number;
  key: string;
  toDate: () => Date;
  toString: () => string;
}

export interface IFClass {
  className: string;
  condition: boolean;
}

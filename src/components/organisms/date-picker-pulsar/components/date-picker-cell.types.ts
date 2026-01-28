/**
 * DatePicker cell component types
 */
import type { IDatePickerCell } from '../core';
import type { DatePickerDisplayType } from '../core';

export interface IDatePickerCellProps {
  item: IDatePickerCell;
  displayMode: DatePickerDisplayType;
  isSelected: boolean;
  isDisabled: boolean;
  onMouseEnter: (item: IDatePickerCell) => void;
  onSelected: (item: IDatePickerCell) => void;
}

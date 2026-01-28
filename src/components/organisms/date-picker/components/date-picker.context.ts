import {
  DatePickerDisplayType,
  DatePickerGridModeType,
  DatePickerSelectionModeType,
} from '../core/date-picker.types';
import { IDatePickerCell, IDatePickerRow } from '../core/models/date-picker.models';

export interface IDatePickerContext {
  selectionMode: () => DatePickerSelectionModeType;
  gridMode: () => DatePickerGridModeType;
  internalDate: () => Date;
  gridData: () => IDatePickerRow[];
  selectedCells: () => IDatePickerCell[];
  updateInternalDate: (date: Date) => void;
  updateSelectedCells: (cells: IDatePickerCell[]) => void;
  updateGridMode: (gridMode: DatePickerGridModeType) => void;
  next: (forceGridMode?: DatePickerGridModeType) => void;
  previous: (forceGridMode?: DatePickerGridModeType) => void;
  jumpToNow: () => void;
  jumpToSelection: () => void;
  clear: () => void;
  close: () => void;
}

let _currentDatePickerContext: IDatePickerContext | null = null;

export const setCurrentDatePickerContext = (context: IDatePickerContext) => {
  _currentDatePickerContext = context;
};

export const useDatePickerContext = (): IDatePickerContext => {
  if (!_currentDatePickerContext) {
    throw new Error('useDatePickerContext must be used within a DatePicker provider');
  }
  return _currentDatePickerContext;
};

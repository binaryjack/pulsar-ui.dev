/**
 * DatePicker cell component
 * Returns HTMLElement displaying a single cell in the date grid
 */
import type { IDatePickerCellProps } from './date-picker-cell.types';
import { ifClass, newIFClass } from '../utils';

export const DatePickerCell = (props: IDatePickerCellProps): HTMLElement => {
  const { item, displayMode, isSelected, isDisabled, onMouseEnter, onSelected } = props;

  const scope = item.item?.isNextScope
    ? 'next'
    : item.item?.isPreviousScope
      ? 'previous'
      : 'current';

  const day = item.id;
  const month = (item.item?.date?.month ?? 0) + 1;
  const year = item.item?.date?.year;

  const classes = ifClass([
    newIFClass('is-now', item.item?.isNow),
    newIFClass('is-weekend', item.item?.isWeekEnd),
    newIFClass('selected', isSelected),
    newIFClass('disabled', isDisabled),
  ]);

  const handleMouseEnter = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onMouseEnter(item);
  };

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (!item?.item) return;
    if (isDisabled) return;

    if (item.item.isCurrentScope) {
      onSelected(item);
    }
  };

  // Display value based on mode
  let displayValue: string;
  switch (displayMode) {
    case 'DAY':
      displayValue = day.toString();
      break;
    case 'MONTH':
      displayValue = month.toString();
      break;
    case 'YEAR':
      displayValue = year?.toString() ?? '';
      break;
    default:
      displayValue = day.toString();
  }

  // Create cell element
  const cellEl = document.createElement('div');
  cellEl.className = `date-cell ${classes} ${scope}`;
  cellEl.setAttribute('data-code', item?.code ?? '');
  cellEl.setAttribute('data-testid', `date-cell-${displayMode.toLowerCase()}-${item?.id}`);
  cellEl.setAttribute('data-scope', scope);
  cellEl.setAttribute('data-grid-mode', displayMode);
  cellEl.setAttribute('data-view', displayMode.toLowerCase());

  cellEl.onmouseenter = handleMouseEnter;
  cellEl.onclick = handleClick;

  // Inner content
  const innerDiv = document.createElement('div');
  const span = document.createElement('span');
  span.textContent = displayValue;
  innerDiv.appendChild(span);
  cellEl.appendChild(innerDiv);

  return cellEl;
};

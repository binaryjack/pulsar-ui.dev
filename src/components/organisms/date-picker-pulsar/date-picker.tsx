/**
 * DatePicker main component
 * Pulsar-native date picker with signal-based reactivity
 */
import './date-picker.css';
import { useState, useEffect } from 'pulsar';
import type { IDatePickerProps } from './date-picker.types';
import { createDatePickerContext } from './context';
import { computeDaysGrid } from './core';
import { DatePickerCell } from './components/date-picker-cell';
import { formatDate, getTs } from './utils';

export const DatePicker = (props: IDatePickerProps): HTMLElement => {
  const {
    value,
    onChange,
    minDate,
    maxDate,
    disabledDates,
    isDateDisabled: customIsDateDisabled,
    format,
    placeholder = 'Select a date',
    className = '',
    disabled = false,
  } = props;

  // Create context with all validation logic
  const context = createDatePickerContext({
    minDate,
    maxDate,
    disabledDates,
    isDateDisabled: customIsDateDisabled,
    initialDate: value,
    onChange,
  });

  // Sync external value changes
  useEffect(() => {
    if (value && value !== context.selectedDate()) {
      context.setSelectedDate(value);
      context.setDisplayDate(value);
    }
  });

  // Compute calendar grid reactively
  const [grid, setGrid] = useState(() => computeDaysGrid(context.displayDate()));

  useEffect(() => {
    setGrid(computeDaysGrid(context.displayDate()));
  });

  // Handle cell selection
  const handleCellSelect = (cell: any) => {
    if (!cell.item) return;
    const date = cell.item.date.toDate();

    if (!context.isDateSelectable(date)) return;

    context.setSelectedDate(date);
    context.close();
  };

  // Handle cell hover
  const handleCellMouseEnter = (cell: any) => {
    // Can be used for range selection in the future
  };

  // Previous month
  const handlePrevMonth = () => {
    const current = context.displayDate();
    const prev = new Date(current.getFullYear(), current.getMonth() - 1, 1);
    context.setDisplayDate(prev);
  };

  // Next month
  const handleNextMonth = () => {
    const current = context.displayDate();
    const next = new Date(current.getFullYear(), current.getMonth() + 1, 1);
    context.setDisplayDate(next);
  };

  // Format display value
  const displayValue = context.selectedDate()
    ? formatDate(context.selectedDate()!, format)
    : placeholder;

  const selectedTs = context.selectedDate() ? getTs(context.selectedDate()!) : null;

  // Container
  const container = document.createElement('div');
  container.className = `date-picker-container ${className}`;
  container.setAttribute('data-disabled', String(disabled));

  // Input trigger
  const inputEl = document.createElement('div');
  inputEl.className = 'date-picker-input';
  inputEl.onclick = () => !disabled && context.toggle();

  const displaySpan = document.createElement('span');
  const iconSpan = document.createElement('span');
  iconSpan.className = 'date-picker-icon';
  iconSpan.textContent = '📅';

  inputEl.appendChild(displaySpan);
  inputEl.appendChild(iconSpan);
  container.appendChild(inputEl);

  // Dropdown calendar container
  const dropdownEl = document.createElement('div');
  dropdownEl.className = 'date-picker-dropdown';
  dropdownEl.style.display = 'none';
  container.appendChild(dropdownEl);

  // Reactively update input display
  useEffect(() => {
    displaySpan.textContent = context.selectedDate()
      ? formatDate(context.selectedDate()!, format)
      : placeholder;
  });

  // Reactively show/hide dropdown
  useEffect(() => {
    dropdownEl.style.display = context.isOpen() ? 'block' : 'none';
  });

  // Build dropdown content
  const buildDropdown = () => {
    dropdownEl.innerHTML = '';

    // Header with navigation
    const header = document.createElement('div');
    header.className = 'date-picker-header';

    const prevBtn = document.createElement('button');
    prevBtn.textContent = '←';
    prevBtn.onclick = handlePrevMonth;

    const monthDisplay = document.createElement('span');
    monthDisplay.textContent = context.displayDate().toLocaleDateString(undefined, {
      month: 'long',
      year: 'numeric',
    });

    const nextBtn = document.createElement('button');
    nextBtn.textContent = '→';
    nextBtn.onclick = handleNextMonth;

    header.appendChild(prevBtn);
    header.appendChild(monthDisplay);
    header.appendChild(nextBtn);
    dropdownEl.appendChild(header);

    // Weekday labels
    const weekdaysEl = document.createElement('div');
    weekdaysEl.className = 'date-picker-weekdays';
    ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].forEach((day) => {
      const dayLabel = document.createElement('div');
      dayLabel.className = 'weekday-label';
      dayLabel.textContent = day;
      weekdaysEl.appendChild(dayLabel);
    });
    dropdownEl.appendChild(weekdaysEl);

    // Calendar grid
    const gridEl = document.createElement('div');
    gridEl.className = 'date-picker-grid';

    grid().forEach((row) => {
      const rowEl = document.createElement('div');
      rowEl.className = 'date-picker-row';

      row.cells.forEach((cell) => {
        const cellDate = cell.item?.date.toDate();
        const cellTs = cellDate ? getTs(cellDate) : null;
        const isSelected =
          cellDate && context.selectedDate() && cellTs === getTs(context.selectedDate()!);
        const isDisabled = cellDate ? !context.isDateSelectable(cellDate) : true;

        const cellEl = DatePickerCell({
          item: cell,
          displayMode: 'DAY',
          isSelected,
          isDisabled,
          onMouseEnter: handleCellMouseEnter,
          onSelected: handleCellSelect,
        });

        rowEl.appendChild(cellEl);
      });

      gridEl.appendChild(rowEl);
    });

    dropdownEl.appendChild(gridEl);
  };

  // Rebuild dropdown when display date or grid changes
  useEffect(() => {
    if (context.isOpen()) {
      buildDropdown();
    }
  });

  // Initial build
  buildDropdown();

  return container;
};

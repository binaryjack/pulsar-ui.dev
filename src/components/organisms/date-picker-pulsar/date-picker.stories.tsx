/**
 * DatePicker Storybook Stories
 * Demonstrates Pulsar-native DatePicker with signal-based reactivity
 */
import { DatePicker, DateFormatsEnum } from './index';
import type { IDatePickerProps } from './date-picker.types';

export default {
  title: 'Organisms/DatePicker (Pulsar)',
  component: DatePicker,
};

// Basic DatePicker
export const Basic = () => {
  const container = document.createElement('div');
  container.style.padding = '20px';

  const picker = DatePicker({
    placeholder: 'Select a date',
    onChange: (date) => {
      console.log('Selected date:', date);
      output.textContent = `Selected: ${date.toLocaleDateString()}`;
    },
  });

  const output = document.createElement('div');
  output.style.marginTop = '20px';
  output.style.padding = '10px';
  output.style.border = '1px solid #ccc';
  output.textContent = 'No date selected';

  container.appendChild(picker);
  container.appendChild(output);

  return container;
};

// With Min/Max Date Constraints
export const WithMinMaxDate = () => {
  const container = document.createElement('div');
  container.style.padding = '20px';

  const today = new Date();
  const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  const description = document.createElement('p');
  description.textContent = `Only dates in current month are selectable (${minDate.toLocaleDateString()} - ${maxDate.toLocaleDateString()})`;
  description.style.marginBottom = '20px';
  description.style.color = '#666';

  const picker = DatePicker({
    minDate,
    maxDate,
    placeholder: 'Select date in current month',
    onChange: (date) => {
      console.log('Selected date:', date);
      output.textContent = `Selected: ${date.toLocaleDateString()}`;
    },
  });

  const output = document.createElement('div');
  output.style.marginTop = '20px';
  output.style.padding = '10px';
  output.style.border = '1px solid #ccc';
  output.textContent = 'No date selected';

  container.appendChild(description);
  container.appendChild(picker);
  container.appendChild(output);

  return container;
};

// With Disabled Dates
export const WithDisabledDates = () => {
  const container = document.createElement('div');
  container.style.padding = '20px';

  const today = new Date();
  const disabledDates = [
    new Date(today.getFullYear(), today.getMonth(), 15),
    new Date(today.getFullYear(), today.getMonth(), 20),
    new Date(today.getFullYear(), today.getMonth(), 25),
  ];

  const description = document.createElement('p');
  description.textContent = 'Dates 15th, 20th, and 25th of current month are disabled';
  description.style.marginBottom = '20px';
  description.style.color = '#666';

  const picker = DatePicker({
    disabledDates,
    placeholder: 'Select an available date',
    onChange: (date) => {
      console.log('Selected date:', date);
      output.textContent = `Selected: ${date.toLocaleDateString()}`;
    },
  });

  const output = document.createElement('div');
  output.style.marginTop = '20px';
  output.style.padding = '10px';
  output.style.border = '1px solid #ccc';
  output.textContent = 'No date selected';

  container.appendChild(description);
  container.appendChild(picker);
  container.appendChild(output);

  return container;
};

// With Custom Validation (Weekends Disabled)
export const NoWeekendsAllowed = () => {
  const container = document.createElement('div');
  container.style.padding = '20px';

  const description = document.createElement('p');
  description.textContent = 'Weekends are disabled (custom validator)';
  description.style.marginBottom = '20px';
  description.style.color = '#666';

  const picker = DatePicker({
    isDateDisabled: (date) => {
      const day = date.getDay();
      return day === 0 || day === 6; // Sunday or Saturday
    },
    placeholder: 'Select a weekday',
    onChange: (date) => {
      console.log('Selected date:', date);
      output.textContent = `Selected: ${date.toLocaleDateString()}`;
    },
  });

  const output = document.createElement('div');
  output.style.marginTop = '20px';
  output.style.padding = '10px';
  output.style.border = '1px solid #ccc';
  output.textContent = 'No date selected';

  container.appendChild(description);
  container.appendChild(picker);
  container.appendChild(output);

  return container;
};

// With Different Date Format
export const WithCustomFormat = () => {
  const container = document.createElement('div');
  container.style.padding = '20px';

  const description = document.createElement('p');
  description.textContent = 'Using YYYY-MM-DD format';
  description.style.marginBottom = '20px';
  description.style.color = '#666';

  const picker = DatePicker({
    format: DateFormatsEnum.YYYY_MM_DD_DASH,
    placeholder: 'YYYY-MM-DD',
    onChange: (date) => {
      console.log('Selected date:', date);
      output.textContent = `Selected: ${date.toISOString().split('T')[0]}`;
    },
  });

  const output = document.createElement('div');
  output.style.marginTop = '20px';
  output.style.padding = '10px';
  output.style.border = '1px solid #ccc';
  output.textContent = 'No date selected';

  container.appendChild(description);
  container.appendChild(picker);
  container.appendChild(output);

  return container;
};

// With Pre-selected Value
export const WithDefaultValue = () => {
  const container = document.createElement('div');
  container.style.padding = '20px';

  const description = document.createElement('p');
  description.textContent = "Pre-selected with today's date";
  description.style.marginBottom = '20px';
  description.style.color = '#666';

  const today = new Date();

  const picker = DatePicker({
    value: today,
    placeholder: 'Select a date',
    onChange: (date) => {
      console.log('Selected date:', date);
      output.textContent = `Selected: ${date.toLocaleDateString()}`;
    },
  });

  const output = document.createElement('div');
  output.style.marginTop = '20px';
  output.style.padding = '10px';
  output.style.border = '1px solid #ccc';
  output.textContent = `Selected: ${today.toLocaleDateString()}`;

  container.appendChild(description);
  container.appendChild(picker);
  container.appendChild(output);

  return container;
};

// Disabled State
export const DisabledState = () => {
  const container = document.createElement('div');
  container.style.padding = '20px';

  const description = document.createElement('p');
  description.textContent = 'DatePicker in disabled state';
  description.style.marginBottom = '20px';
  description.style.color = '#666';

  const picker = DatePicker({
    disabled: true,
    placeholder: 'Disabled',
  });

  container.appendChild(description);
  container.appendChild(picker);

  return container;
};

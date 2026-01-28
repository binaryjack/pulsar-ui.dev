/**
 * DatePicker Component - Storybook Stories
 * Demonstrates DatePicker with different configurations
 */

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'pulsar';
import DatePicker from './date-picker';
import { DateFormatsEnum } from './utils/date-utils';
import './date-picker.css';

const meta: Meta<typeof DatePicker> = {
  title: 'Organisms/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## DatePicker Component

A powerful, accessible date picker component built with Pulsar.

### Key Features
- ✅ Single date and range selection
- ✅ Keyboard navigation (Arrow keys, Y/M/D for views, N for now, S for selection)
- ✅ Customizable date formats
- ✅ Controlled and uncontrolled modes
- ✅ Accessible & responsive
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

/**
 * Basic uncontrolled DatePicker
 */
export const Basic: Story = {
  render: () => {
    const BasicExample = () => {
      return (
        <div style={{ padding: '20px' }}>
          <DatePicker
            id="basic-picker"
            onChange={(startDate, endDate) => {
              console.log('Selected:', startDate, endDate);
            }}
          />
        </div>
      );
    };
    return <BasicExample />;
  },
};

/**
 * Controlled DatePicker with state management
 */
export const Controlled: Story = {
  render: () => {
    const ControlledExample = () => {
      const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

      return (
        <div style={{ padding: '20px' }}>
          <DatePicker
            id="controlled-picker"
            value={selectedDate}
            onChange={(startDate) => {
              setSelectedDate(startDate);
            }}
            placeholder="Pick a date"
          />
          {selectedDate() && (
            <p style={{ marginTop: '10px' }}>Selected: {selectedDate()!.toLocaleDateString()}</p>
          )}
        </div>
      );
    };
    return <ControlledExample />;
  },
};

/**
 * Range selection mode
 */
export const RangeSelection: Story = {
  render: () => {
    const RangeExample = () => {
      const [startDate, setStartDate] = useState<Date | undefined>(undefined);
      const [endDate, setEndDate] = useState<Date | undefined>(undefined);

      return (
        <div style={{ padding: '20px' }}>
          <DatePicker
            id="range-picker"
            defaultSelectionMode="range"
            onChange={(start, end) => {
              setStartDate(start);
              setEndDate(end);
            }}
            placeholder="Select date range"
          />
          {startDate() && (
            <div style={{ marginTop: '10px' }}>
              <p>Start: {startDate()!.toLocaleDateString()}</p>
              {endDate() && <p>End: {endDate()!.toLocaleDateString()}</p>}
            </div>
          )}
        </div>
      );
    };
    return <RangeExample />;
  },
};

/**
 * With default value
 */
export const WithDefaultValue: Story = {
  render: () => {
    const DefaultValueExample = () => {
      return (
        <div style={{ padding: '20px' }}>
          <DatePicker
            id="default-value-picker"
            defaultValue={new Date(2024, 0, 15)}
            onChange={(startDate) => {
              console.log('Selected:', startDate);
            }}
          />
        </div>
      );
    };
    return <DefaultValueExample />;
  },
};

/**
 * With custom date formats
 */
export const CustomFormats: Story = {
  render: () => {
    const CustomFormatExample = () => {
      return (
        <div style={{ padding: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ marginBottom: '10px' }}>MM/DD/YYYY Format</h4>
            <DatePicker
              id="format-mmddyyyy"
              displayFormat={DateFormatsEnum.MMDDYYYY}
              separator="/"
              onChange={(startDate) => {
                console.log('Selected:', startDate);
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ marginBottom: '10px' }}>DD-MM-YYYY Format</h4>
            <DatePicker
              id="format-ddmmyyyy"
              displayFormat={DateFormatsEnum.DDMMYYYY}
              separator="-"
              onChange={(startDate) => {
                console.log('Selected:', startDate);
              }}
            />
          </div>

          <div>
            <h4 style={{ marginBottom: '10px' }}>YYYY/MM/DD Format</h4>
            <DatePicker
              id="format-yyyymmdd"
              displayFormat={DateFormatsEnum.YYYYMMDD}
              separator="/"
              onChange={(startDate) => {
                console.log('Selected:', startDate);
              }}
            />
          </div>
        </div>
      );
    };
    return <CustomFormatExample />;
  },
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  render: () => {
    const DisabledExample = () => {
      return (
        <div style={{ padding: '20px' }}>
          <DatePicker
            id="disabled-picker"
            disabled={true}
            defaultValue={new Date()}
            onChange={(startDate) => {
              console.log('Selected:', startDate);
            }}
          />
        </div>
      );
    };
    return <DisabledExample />;
  },
};

/**
 * Multiple pickers
 */
export const MultiplePickers: Story = {
  render: () => {
    const MultipleExample = () => {
      const [startDate, setStartDate] = useState<Date | undefined>(undefined);
      const [endDate, setEndDate] = useState<Date | undefined>(undefined);

      return (
        <div style={{ padding: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Start Date
            </label>
            <DatePicker
              id="start-date-picker"
              value={startDate}
              onChange={(date) => {
                setStartDate(date);
              }}
              placeholder="Select start date"
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              End Date
            </label>
            <DatePicker
              id="end-date-picker"
              value={endDate}
              onChange={(date) => {
                setEndDate(date);
              }}
              placeholder="Select end date"
            />
          </div>

          {startDate() && endDate() && (
            <div
              style={{
                marginTop: '20px',
                padding: '10px',
                backgroundColor: '#f0f0f0',
                borderRadius: '4px',
              }}
            >
              <strong>Selected Range:</strong>
              <br />
              {startDate()!.toLocaleDateString()} - {endDate()!.toLocaleDateString()}
            </div>
          )}
        </div>
      );
    };
    return <MultipleExample />;
  },
};

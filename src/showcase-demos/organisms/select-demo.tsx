/**
 * Select Component Demo
 * Demonstrates native select dropdown patterns
 */

import { Select } from '../../components/organisms/select';
import { Typography } from '../../components/atoms/typography';
import { Stack } from '../../components/atoms/stack';
import { Label } from '../../components/molecules/label';
import { ComponentConfigBuilder } from '../../components/utils/component-config-builder/component-config-builder';
import { DemoSection } from '../../showcase-components/demo-section';
import { CodeBlock } from '../../showcase-components/code-block';

export const SelectDemo = (): HTMLElement => {
  // Sample options
  const countryOptions = [
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Germany', value: 'de' },
    { label: 'France', value: 'fr' },
    { label: 'Japan', value: 'jp' },
    { label: 'Australia', value: 'au' },
  ];

  const priorityOptions = [
    { label: 'Low Priority', value: 'low' },
    { label: 'Medium Priority', value: 'medium' },
    { label: 'High Priority', value: 'high' },
    { label: 'Critical', value: 'critical' },
  ];

  const categoryOptions = [
    { label: 'Technology', value: 'tech' },
    { label: 'Business', value: 'business' },
    { label: 'Design', value: 'design' },
    { label: 'Marketing', value: 'marketing' },
    { label: 'Sales', value: 'sales' },
  ];

  return (
    <Stack direction="vertical" spacing="lg">
      {/* Basic Select */}
      <DemoSection
        title="Basic Select"
        description="Simple select dropdown with placeholder and options"
      >
        <Stack direction="vertical" spacing="md">
          <Stack direction="vertical" spacing="xs">
            <Label text="Country" />
            <Select
              options={countryOptions}
              placeholder="Select a country"
              ariaLabel="Country selection"
            />
          </Stack>

          <Stack direction="vertical" spacing="xs">
            <Label text="Priority Level" />
            <Select
              options={priorityOptions}
              placeholder="Choose priority"
              ariaLabel="Priority level"
            />
          </Stack>

          <Stack direction="vertical" spacing="xs">
            <Label text="Category" />
            <Select
              options={categoryOptions}
              defaultValue="design"
              ariaLabel="Category selection"
            />
          </Stack>
        </Stack>

        <CodeBlock
          code={`const options = [
  { label: 'United States', value: 'us' },
  { label: 'Canada', value: 'ca' },
  { label: 'United Kingdom', value: 'uk' }
];

<Select 
  options={options}
  placeholder="Select a country"
  ariaLabel="Country selection"
/>`}
        />
      </DemoSection>

      {/* Sizes */}
      <DemoSection title="Select Sizes" description="Different size variants">
        <Stack direction="vertical" spacing="md">
          <Stack direction="vertical" spacing="xs">
            <Label text="Small Select" />
            <Select
              config={new ComponentConfigBuilder('primary').size('sm').build()}
              options={countryOptions}
              placeholder="Small select"
            />
          </Stack>

          <Stack direction="vertical" spacing="xs">
            <Label text="Medium Select (Default)" />
            <Select
              config={new ComponentConfigBuilder('primary').size('md').build()}
              options={countryOptions}
              placeholder="Medium select"
            />
          </Stack>

          <Stack direction="vertical" spacing="xs">
            <Label text="Large Select" />
            <Select
              config={new ComponentConfigBuilder('primary').size('lg').build()}
              options={countryOptions}
              placeholder="Large select"
            />
          </Stack>
        </Stack>

        <CodeBlock
          code={`// Small
<Select 
  config={new ComponentConfigBuilder('primary').size('sm').build()}
  options={options}
/>

// Large
<Select 
  config={new ComponentConfigBuilder('primary').size('lg').build()}
  options={options}
/>`}
        />
      </DemoSection>

      {/* States */}
      <DemoSection title="Select States" description="Disabled and loading states">
        <Stack direction="vertical" spacing="md">
          <Stack direction="vertical" spacing="xs">
            <Label text="Disabled Select" />
            <Select
              config={new ComponentConfigBuilder('primary').disabled(true).build()}
              options={countryOptions}
              placeholder="This select is disabled"
            />
          </Stack>

          <Stack direction="vertical" spacing="xs">
            <Label text="Loading Select" />
            <Select
              config={new ComponentConfigBuilder('primary').loading(true).build()}
              options={countryOptions}
            />
          </Stack>

          <Stack direction="vertical" spacing="xs">
            <Label text="With Disabled Options" />
            <Select
              options={[
                { label: 'Available Option 1', value: 'opt1' },
                { label: 'Disabled Option', value: 'opt2', disabled: true },
                { label: 'Available Option 2', value: 'opt3' },
                { label: 'Another Disabled', value: 'opt4', disabled: true },
              ]}
              placeholder="Some options disabled"
            />
          </Stack>
        </Stack>

        <CodeBlock
          code={`// Disabled Select
<Select 
  config={new ComponentConfigBuilder('primary').disabled(true).build()}
  options={options}
/>

// Loading Select
<Select 
  config={new ComponentConfigBuilder('primary').loading(true).build()}
  options={options}
/>

// Disabled Options
const options = [
  { label: 'Available', value: 'opt1' },
  { label: 'Disabled', value: 'opt2', disabled: true }
];`}
        />
      </DemoSection>

      {/* Full Width */}
      <DemoSection title="Full Width Select" description="Select that spans container width">
        <Stack direction="vertical" spacing="xs">
          <Label text="Full Width Select" />
          <Select
            config={new ComponentConfigBuilder('primary').fullWidth(true).build()}
            options={countryOptions}
            placeholder="Select spans full width"
          />
        </Stack>

        <CodeBlock
          code={`<Select 
  config={new ComponentConfigBuilder('primary').fullWidth(true).build()}
  options={options}
  placeholder="Full width select"
/>`}
        />
      </DemoSection>

      {/* Rounded Variants */}
      <DemoSection title="Rounded Corners" description="Different border radius options">
        <Stack direction="vertical" spacing="md">
          <Stack direction="vertical" spacing="xs">
            <Label text="No Rounding (None)" />
            <Select
              config={new ComponentConfigBuilder('primary').rounded('none').build()}
              options={countryOptions}
              placeholder="Sharp corners"
            />
          </Stack>

          <Stack direction="vertical" spacing="xs">
            <Label text="Small Rounding (SM)" />
            <Select
              config={new ComponentConfigBuilder('primary').rounded('sm').build()}
              options={countryOptions}
              placeholder="Small rounded"
            />
          </Stack>

          <Stack direction="vertical" spacing="xs">
            <Label text="Medium Rounding (MD)" />
            <Select
              config={new ComponentConfigBuilder('primary').rounded('md').build()}
              options={countryOptions}
              placeholder="Medium rounded"
            />
          </Stack>

          <Stack direction="vertical" spacing="xs">
            <Label text="Large Rounding (LG)" />
            <Select
              config={new ComponentConfigBuilder('primary').rounded('lg').build()}
              options={countryOptions}
              placeholder="Large rounded"
            />
          </Stack>

          <Stack direction="vertical" spacing="xs">
            <Label text="Extra Large Rounding (XL)" />
            <Select
              config={new ComponentConfigBuilder('primary').rounded('xl').build()}
              options={countryOptions}
              placeholder="Extra large rounded"
            />
          </Stack>

          <Stack direction="vertical" spacing="xs">
            <Label text="Full Rounding (Full)" />
            <Select
              config={new ComponentConfigBuilder('primary').rounded('full').build()}
              options={countryOptions}
              placeholder="Fully rounded"
            />
          </Stack>
        </Stack>

        <CodeBlock
          code={`<Select 
  config={new ComponentConfigBuilder('primary').rounded('lg').build()}
  options={options}
/>`}
        />
      </DemoSection>

      {/* With Labels and Helper Text */}
      <DemoSection
        title="Form Integration"
        description="Select with labels, helper text, and validation"
      >
        <Stack direction="vertical" spacing="md">
          <Stack direction="vertical" spacing="xs">
            <Label text="Country" required helperText="Select your country of residence" />
            <Select options={countryOptions} placeholder="Select country" />
          </Stack>

          <Stack direction="vertical" spacing="xs">
            <Label
              text="Priority"
              required
              helperText="Choose task priority level"
              error="Priority is required"
            />
            <Select options={priorityOptions} placeholder="Select priority" />
          </Stack>

          <Stack direction="vertical" spacing="xs">
            <Label text="Optional Category" helperText="You can skip this field" />
            <Select options={categoryOptions} placeholder="Select category (optional)" />
          </Stack>
        </Stack>

        <CodeBlock
          code={`<Stack direction="vertical" spacing="xs">
  <Label 
    text="Country" 
    required 
    helperText="Select your country"
  />
  <Select 
    options={countryOptions}
    placeholder="Select country"
  />
</Stack>`}
        />
      </DemoSection>

      {/* Event Handling */}
      <DemoSection
        title="Event Handling"
        description="Handle selection changes with onChange callback"
      >
        <Stack direction="vertical" spacing="xs">
          <Label text="Select with onChange" helperText="Check console for selection events" />
          <Select
            options={countryOptions}
            placeholder="Select to trigger event"
            onChange={(value) => {
              console.log('Selected value:', value);
            }}
          />
        </Stack>

        <CodeBlock
          code={`<Select 
  options={options}
  onChange={(value) => {
    console.log('Selected:', value);
    // Handle selection change
  }}
/>`}
        />
      </DemoSection>

      {/* Common Patterns */}
      <DemoSection
        title="Common Form Patterns"
        description="Real-world select usage in forms"
      >
        <Stack direction="vertical" spacing="md">
          {/* User Profile Form */}
          <Stack direction="vertical" spacing="md">
            <Typography tag="h4" variant="h4">
              User Profile Form
            </Typography>

            <Stack direction="vertical" spacing="xs">
              <Label text="Country" required />
              <Select
                config={new ComponentConfigBuilder('primary').fullWidth(true).build()}
                options={countryOptions}
                placeholder="Select your country"
              />
            </Stack>

            <Stack direction="vertical" spacing="xs">
              <Label text="Account Type" required />
              <Select
                config={new ComponentConfigBuilder('primary').fullWidth(true).build()}
                options={[
                  { label: 'Personal', value: 'personal' },
                  { label: 'Business', value: 'business' },
                  { label: 'Enterprise', value: 'enterprise' },
                ]}
                placeholder="Select account type"
              />
            </Stack>

            <Stack direction="vertical" spacing="xs">
              <Label text="Timezone" />
              <Select
                config={new ComponentConfigBuilder('primary').fullWidth(true).build()}
                options={[
                  { label: 'UTC-8 (Pacific)', value: 'pst' },
                  { label: 'UTC-5 (Eastern)', value: 'est' },
                  { label: 'UTC+0 (London)', value: 'gmt' },
                  { label: 'UTC+9 (Tokyo)', value: 'jst' },
                ]}
                defaultValue="pst"
              />
            </Stack>
          </Stack>
        </Stack>

        <CodeBlock
          code={`<form>
  <Stack direction="vertical" spacing="md">
    <Stack direction="vertical" spacing="xs">
      <Label text="Country" required />
      <Select 
        config={new ComponentConfigBuilder('primary').fullWidth(true).build()}
        options={countryOptions}
      />
    </Stack>
    
    <Stack direction="vertical" spacing="xs">
      <Label text="Account Type" required />
      <Select 
        config={new ComponentConfigBuilder('primary').fullWidth(true).build()}
        options={accountTypes}
      />
    </Stack>
  </Stack>
</form>`}
        />
      </DemoSection>
    </Stack>
  );
};

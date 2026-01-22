import type { Meta, StoryObj } from '@storybook/html'
import { RadioGroup } from '../components/molecules/radio-group'
import { ComponentConfigBuilder } from '../components/utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../components/utils/component-styling-builder/component-styling-builder'

/**
 * RadioGroup component - Molecule for grouped radio selections
 */
const meta: Meta = {
  title: 'Molecules/RadioGroup',
  tags: ['autodocs'],
  render: (args) => {
    const config = new ComponentConfigBuilder(args.variant || 'primary')
      .disabled(args.disabled || false)
      .loading(args.loading || false)
      .build()

    const styling = new ComponentStylingBuilder()
      .base('flex gap-4')
      .build()

    return RadioGroup({
      config,
      styling,
      name: args.name || 'radio-group',
      options: args.options,
      value: args.value,
      orientation: args.orientation,
    })
  },
  argTypes: {
    name: { control: 'text' },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj

export const Vertical: Story = {
  args: {
    name: 'plan-selection',
    orientation: 'vertical',
    options: [
      { label: 'Free Plan', value: 'free' },
      { label: 'Pro Plan', value: 'pro' },
      { label: 'Enterprise Plan', value: 'enterprise' },
    ],
  },
}

export const Horizontal: Story = {
  args: {
    name: 'size-selection',
    orientation: 'horizontal',
    options: [
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
    ],
  },
}

export const WithDefaultValue: Story = {
  args: {
    name: 'color-selection',
    orientation: 'vertical',
    defaultValue: 'blue',
    options: [
      { label: 'Red', value: 'red' },
      { label: 'Blue', value: 'blue' },
      { label: 'Green', value: 'green' },
    ],
  },
}

export const WithDisabledOption: Story = {
  args: {
    name: 'tier-selection',
    orientation: 'vertical',
    options: [
      { label: 'Basic', value: 'basic' },
      { label: 'Premium (Coming Soon)', value: 'premium', disabled: true },
      { label: 'Ultimate (Coming Soon)', value: 'ultimate', disabled: true },
    ],
  },
}

export const AllDisabled: Story = {
  args: {
    name: 'disabled-group',
    orientation: 'vertical',
    disabled: true,
    options: [
      { label: 'Option 1', value: 'opt1' },
      { label: 'Option 2', value: 'opt2' },
      { label: 'Option 3', value: 'opt3' },
    ],
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

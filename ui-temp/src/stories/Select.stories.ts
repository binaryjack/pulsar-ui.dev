import type { Meta, StoryObj } from '@storybook/html'
import { Select } from '../components/organisms/select'
import { ComponentConfigBuilder } from '../components/utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../components/utils/component-styling-builder/component-styling-builder'

/**
 * Select component - Organism for dropdown selections
 */
const meta: Meta = {
  title: 'Organisms/Select',
  tags: ['autodocs'],
  render: (args) => {
    const config = new ComponentConfigBuilder(args.variant || 'primary')
      .size(args.size || 'md')
      .rounded(args.rounded || 'md')
      .disabled(args.disabled || false)
      .loading(args.loading || false)
      .fullWidth(args.fullWidth || false)
      .build()

    const styling = new ComponentStylingBuilder()
      .base('block border font-medium focus:outline-none appearance-none bg-white pr-10')
      .transition('transition-colors duration-200')
      .border('border-neutral-300')
      .focus('focus:ring-2 focus:ring-primary-500 focus:border-primary-600')
      .disabled('bg-neutral-100 text-neutral-500 cursor-not-allowed')
      .build()

    return Select({
      config,
      styling,
      options: args.options,
      placeholder: args.placeholder,
      value: args.value,
    })
  },
  argTypes: {
    placeholder: { control: 'text' },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  args: {
    placeholder: 'Select an option',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
  },
}

export const Countries: Story = {
  args: {
    placeholder: 'Select your country',
    options: [
      { label: 'United States', value: 'us' },
      { label: 'United Kingdom', value: 'uk' },
      { label: 'Canada', value: 'ca' },
      { label: 'Australia', value: 'au' },
      { label: 'Germany', value: 'de' },
      { label: 'France', value: 'fr' },
    ],
  },
}

export const WithDefaultValue: Story = {
  args: {
    placeholder: 'Select a color',
    defaultValue: 'blue',
    options: [
      { label: 'Red', value: 'red' },
      { label: 'Blue', value: 'blue' },
      { label: 'Green', value: 'green' },
      { label: 'Yellow', value: 'yellow' },
    ],
  },
}

export const WithDisabledOptions: Story = {
  args: {
    placeholder: 'Select a plan',
    options: [
      { label: 'Free Plan', value: 'free' },
      { label: 'Pro Plan', value: 'pro' },
      { label: 'Enterprise Plan (Contact Sales)', value: 'enterprise', disabled: true },
    ],
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: 'Small select',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: 'Large select',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
  },
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    placeholder: 'Full width select',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled select',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

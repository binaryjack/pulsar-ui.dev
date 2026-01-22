import type { Meta, StoryObj } from '@storybook/html'
import { Textarea } from '../components/atoms/textarea'
import { ComponentConfigBuilder } from '../components/utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../components/utils/component-styling-builder/component-styling-builder'

/**
 * Textarea component - Atomic element for multi-line text input
 */
const meta: Meta = {
  title: 'Atoms/Textarea',
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
      .base('block border font-medium focus:outline-none resize-y')
      .transition('transition-colors duration-200')
      .border('border-neutral-300')
      .focus('focus:ring-2 focus:ring-primary-500 focus:border-primary-600')
      .background('bg-white text-neutral-900')
      .readOnly('bg-neutral-50 cursor-default')
      .disabled('bg-neutral-100 text-neutral-500 cursor-not-allowed')
      .build()

    return Textarea({
      config,
      styling,
      placeholder: args.placeholder,
      value: args.value,
      rows: args.rows,
      readOnly: args.readOnly,
    })
  },
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    rows: { control: 'number' },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  args: {
    placeholder: 'Enter your text here...',
    rows: 4,
  },
}

export const WithValue: Story = {
  args: {
    value: 'This is a sample text in the textarea component.',
    rows: 4,
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: 'Small textarea',
    rows: 3,
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: 'Large textarea',
    rows: 6,
  },
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    placeholder: 'Full width textarea',
    rows: 4,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'This textarea is disabled',
  },
}

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: 'This textarea is read-only',
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

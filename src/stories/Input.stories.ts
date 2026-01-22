import type { Meta, StoryObj } from '@storybook/html'
import { Input } from '../components/atoms/input'
import { ComponentConfigBuilder } from '../components/utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../components/utils/component-styling-builder/component-styling-builder'

/**
 * Input component - Text input field
 * 
 * Canonical implementation following architectural pattern
 */
const meta: Meta = {
  title: 'Atoms/Input',
  tags: ['autodocs'],
  render: (args) => {
    const config = new ComponentConfigBuilder('primary')
      .size(args.size || 'md')
      .rounded(args.rounded || 'md')
      .disabled(args.disabled || false)
      .loading(args.loading || false)
      .fullWidth(args.fullWidth || false)
      .build()

    const styling = new ComponentStylingBuilder()
      .base('border font-medium')
      .border('border-neutral-300')
      .focus('focus:outline-none focus:ring-2 focus:ring-primary-500')
      .background(args.readOnly ? 'bg-neutral-100' : 'bg-white')
      .readOnly(args.readOnly ? 'cursor-not-allowed' : '')
      .build()

    return Input({
      config,
      styling,
      type: args.type || 'text',
      placeholder: args.placeholder,
      value: args.value,
      readOnly: args.readOnly,
    })
  },
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
    },
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
    readOnly: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
} satisfies Meta

export default meta
type Story = StoryObj

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

export const WithValue: Story = {
  args: {
    value: 'Sample text',
    placeholder: 'Enter text...',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
  },
}

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter email...',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
}

export const ReadOnly: Story = {
  args: {
    value: 'Read-only value',
    readOnly: true,
  },
}

export const Small: Story = {
  args: {
    placeholder: 'Small input',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    placeholder: 'Large input',
    size: 'lg',
  },
}

export const FullWidth: Story = {
  args: {
    placeholder: 'Full width input',
    fullWidth: true,
  },
}

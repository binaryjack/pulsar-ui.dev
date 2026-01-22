import type { Meta, StoryObj } from '@storybook/html'
import { Button } from '../components/molecules/button'
import { ComponentConfigBuilder } from '../components/utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../components/utils/component-styling-builder/component-styling-builder'

/**
 * Button component - Atomic element for user actions
 */
const meta: Meta = {
  title: 'Atoms/Button',
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
      .base('inline-flex items-center justify-center font-medium transition-colors')
      .background('bg-primary-600 hover:bg-primary-700')
      .build()

    return Button({
      config,
      styling,
      type: args.type || 'button',
      children: args.label,
    })
  },
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning'],
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
    fullWidth: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
  },
}

export default meta
type Story = StoryObj

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'md',
    rounded: 'md',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
}

export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    label: 'Large Button',
    size: 'lg',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
}

export const Loading: Story = {
  args: {
    label: 'Loading Button',
    loading: true,
  },
}

export const FullWidth: Story = {
  args: {
    label: 'Full Width Button',
    fullWidth: true,
  },
}

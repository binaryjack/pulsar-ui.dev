import type { Meta, StoryObj } from '@storybook/html'
import { Badge } from '../components/molecules/badge'
import { ComponentConfigBuilder } from '../components/utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../components/utils/component-styling-builder/component-styling-builder'

/**
 * Badge component - Molecule for labels and status indicators
 * 
 * Composes icon + text with various styling options
 */
const meta: Meta = {
  title: 'Molecules/Badge',
  tags: ['autodocs'],
  render: (args) => {
    const config = new ComponentConfigBuilder(args.variant || 'primary')
      .size(args.size || 'md')
      .rounded(args.rounded || 'full')
      .build()

    const styling = new ComponentStylingBuilder()
      .base('inline-flex items-center gap-1 font-medium')
      .background('bg-primary-100 text-primary-800')
      .build()

    return Badge({
      config,
      styling,
      label: args.label,
      dot: args.dot,
      iconPosition: args.iconPosition,
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
      options: ['sm', 'md', 'lg', 'full'],
    },
    dot: { control: 'boolean' },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj

export const Default: Story = {
  args: {
    label: 'Badge',
  },
}

export const WithDot: Story = {
  args: {
    label: 'Active',
    dot: true,
  },
}

export const Success: Story = {
  args: {
    label: 'Success',
    variant: 'success',
  },
}

export const Error: Story = {
  args: {
    label: 'Error',
    variant: 'error',
  },
}

export const Warning: Story = {
  args: {
    label: 'Warning',
    variant: 'warning',
  },
}

export const Small: Story = {
  args: {
    label: 'Small',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    label: 'Large',
    size: 'lg',
  },
}

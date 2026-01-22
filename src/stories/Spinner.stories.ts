import type { Meta, StoryObj } from '@storybook/html'
import { Spinner } from '../components/atoms/spinner'

/**
 * Spinner component - Atomic loading indicator
 */
const meta: Meta = {
  title: 'Atoms/Spinner',
  tags: ['autodocs'],
  render: (args) => {
    return Spinner({
      size: args.size,
      label: args.label,
      className: args.className,
    })
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    label: { control: 'text' },
    className: { control: 'text' },
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  args: {
    size: 'md',
    label: 'Loading',
  },
}

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    label: 'Loading',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Loading',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Loading',
  },
}

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    label: 'Loading',
  },
}

export const PrimaryColor: Story = {
  args: {
    size: 'md',
    label: 'Loading',
    className: 'text-primary-600',
  },
}

export const SecondaryColor: Story = {
  args: {
    size: 'md',
    label: 'Loading',
    className: 'text-secondary-600',
  },
}

export const SuccessColor: Story = {
  args: {
    size: 'md',
    label: 'Loading',
    className: 'text-success-600',
  },
}

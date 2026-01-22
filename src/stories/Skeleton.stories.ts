import type { Meta, StoryObj } from '@storybook/html'
import { Skeleton } from '../components/atoms/skeleton'

/**
 * Skeleton component - Loading placeholder
 */
const meta: Meta = {
  title: 'Atoms/Skeleton',
  tags: ['autodocs'],
  render: (args) => {
    return Skeleton({
      width: args.width,
      height: args.height,
      rounded: args.rounded,
      className: args.className,
    })
  },
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    className: { control: 'text' },
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  args: {
    width: 'w-full',
    height: 'h-4',
    rounded: 'md',
  },
}

export const Text: Story = {
  args: {
    width: 'w-64',
    height: 'h-4',
    rounded: 'sm',
  },
}

export const Title: Story = {
  args: {
    width: 'w-48',
    height: 'h-8',
    rounded: 'md',
  },
}

export const Avatar: Story = {
  args: {
    width: 'w-12',
    height: 'h-12',
    rounded: 'full',
  },
}

export const Card: Story = {
  args: {
    width: 'w-full',
    height: 'h-64',
    rounded: 'lg',
  },
}

export const Button: Story = {
  args: {
    width: 'w-32',
    height: 'h-10',
    rounded: 'md',
  },
}

export const Image: Story = {
  args: {
    width: 'w-96',
    height: 'h-48',
    rounded: 'lg',
  },
}

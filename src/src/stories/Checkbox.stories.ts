import type { Meta, StoryObj } from '@storybook/html'
import { Checkbox } from '../components/atoms/checkbox'
import { ComponentConfigBuilder } from '../components/utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../components/utils/component-styling-builder/component-styling-builder'

/**
 * Checkbox component - Atomic element for binary selections
 */
const meta: Meta = {
  title: 'Atoms/Checkbox',
  tags: ['autodocs'],
  render: (args) => {
    const config = new ComponentConfigBuilder(args.variant || 'primary')
      .size(args.size || 'md')
      .rounded(args.rounded || 'sm')
      .disabled(args.disabled || false)
      .loading(args.loading || false)
      .build()

    const styling = new ComponentStylingBuilder()
      .base('border cursor-pointer focus:outline-none')
      .transition('transition-colors duration-200')
      .border('border-neutral-300')
      .focus('focus:ring-2 focus:ring-primary-500 focus:border-primary-600')
      .background('bg-white checked:bg-primary-600 checked:border-primary-600')
      .disabled('bg-neutral-100 cursor-not-allowed')
      .build()

    return Checkbox({
      config,
      styling,
      checked: args.checked,
      defaultChecked: args.defaultChecked,
    })
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  args: {
    size: 'md',
    rounded: 'sm',
  },
}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

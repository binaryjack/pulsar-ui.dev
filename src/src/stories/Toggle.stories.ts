import type { Meta, StoryObj } from '@storybook/html'
import { Toggle } from '../components/atoms/toggle'
import { ComponentConfigBuilder } from '../components/utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../components/utils/component-styling-builder/component-styling-builder'

/**
 * Toggle component - Atomic element for on/off selections
 */
const meta: Meta = {
  title: 'Atoms/Toggle',
  tags: ['autodocs'],
  render: (args) => {
    const config = new ComponentConfigBuilder(args.variant || 'primary')
      .size(args.size || 'md')
      .rounded('full')
      .disabled(args.disabled || false)
      .loading(args.loading || false)
      .build()

    const styling = new ComponentStylingBuilder()
      .base('relative inline-flex items-center rounded-full cursor-pointer focus:outline-none transition-colors duration-200')
      .focus('focus:ring-2 focus:ring-primary-500 focus:ring-offset-2')
      .background('bg-neutral-300 aria-checked:bg-primary-600')
      .disabled('opacity-50 cursor-not-allowed')
      .build()

    return Toggle({
      config,
      styling,
      checked: args.checked,
    })
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  args: {
    size: 'md',
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

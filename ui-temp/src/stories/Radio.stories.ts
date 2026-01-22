import type { Meta, StoryObj } from '@storybook/html'
import { Radio } from '../components/atoms/radio'
import { ComponentConfigBuilder } from '../components/utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../components/utils/component-styling-builder/component-styling-builder'

/**
 * Radio component - Atomic element for single selections within a group
 */
const meta: Meta = {
  title: 'Atoms/Radio',
  tags: ['autodocs'],
  render: (args) => {
    const config = new ComponentConfigBuilder(args.variant || 'primary')
      .size(args.size || 'md')
      .rounded('full')
      .disabled(args.disabled || false)
      .loading(args.loading || false)
      .build()

    const styling = new ComponentStylingBuilder()
      .base('border cursor-pointer focus:outline-none rounded-full')
      .transition('transition-colors duration-200')
      .border('border-neutral-300')
      .focus('focus:ring-2 focus:ring-primary-500 focus:border-primary-600')
      .background('bg-white checked:bg-primary-600 checked:border-primary-600')
      .disabled('bg-neutral-100 cursor-not-allowed')
      .build()

    return Radio({
      config,
      styling,
      name: args.name || 'radio-example',
      value: args.value || 'option',
      checked: args.checked,
      defaultChecked: args.defaultChecked,
    })
  },
  argTypes: {
    name: { control: 'text' },
    value: { control: 'text' },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
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
    name: 'radio-demo',
    value: 'option1',
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    name: 'radio-demo',
    value: 'option1',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    name: 'radio-demo',
    value: 'option1',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    name: 'radio-demo',
    value: 'option1',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    name: 'radio-demo',
    value: 'option1',
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
    name: 'radio-demo',
    value: 'option1',
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

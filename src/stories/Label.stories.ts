import type { Meta, StoryObj } from '@storybook/html'
import { Label } from '../components/molecules/label'
import { ComponentConfigBuilder } from '../components/utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../components/utils/component-styling-builder/component-styling-builder'

/**
 * Label component - Molecule for form field labels
 */
const meta: Meta = {
  title: 'Molecules/Label',
  tags: ['autodocs'],
  render: (args) => {
    const config = new ComponentConfigBuilder(args.variant || 'primary')
      .loading(args.loading || false)
      .build()

    const styling = new ComponentStylingBuilder()
      .base('block mb-2')
      .build()

    return Label({
      config,
      styling,
      text: args.text,
      htmlFor: args.htmlFor,
      required: args.required,
      disabled: args.disabled,
      helperText: args.helperText,
      errorText: args.errorText,
    })
  },
  argTypes: {
    text: { control: 'text' },
    htmlFor: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    helperText: { control: 'text' },
    errorText: { control: 'text' },
    loading: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  args: {
    text: 'Email Address',
    htmlFor: 'email-input',
  },
}

export const Required: Story = {
  args: {
    text: 'Full Name',
    htmlFor: 'name-input',
    required: true,
  },
}

export const WithHelperText: Story = {
  args: {
    text: 'Username',
    htmlFor: 'username-input',
    helperText: 'Choose a unique username between 3-20 characters',
  },
}

export const WithError: Story = {
  args: {
    text: 'Password',
    htmlFor: 'password-input',
    errorText: 'Password must be at least 8 characters',
  },
}

export const RequiredWithHelper: Story = {
  args: {
    text: 'Phone Number',
    htmlFor: 'phone-input',
    required: true,
    helperText: 'Include your country code',
  },
}

export const Disabled: Story = {
  args: {
    text: 'Disabled Field',
    htmlFor: 'disabled-input',
    disabled: true,
    helperText: 'This field is currently disabled',
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

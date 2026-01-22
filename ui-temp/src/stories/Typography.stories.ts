import type { Meta, StoryObj } from '@storybook/html'
import { Typography } from '../components/atoms/typography'
import { ComponentConfigBuilder } from '../components/utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../components/utils/component-styling-builder/component-styling-builder'

/**
 * Typography component - Atomic element for text rendering
 */
const meta: Meta = {
  title: 'Atoms/Typography',
  tags: ['autodocs'],
  render: (args) => {
    const config = new ComponentConfigBuilder(args.variant || 'primary')
      .loading(args.loading || false)
      .className(args.className)
      .build()

    const styling = new ComponentStylingBuilder()
      .base('text-neutral-900')
      .build()

    return Typography({
      config,
      styling,
      tag: args.tag,
      variant: args.variant,
      truncate: args.truncate,
      noWrap: args.noWrap,
      userSelect: args.userSelect,
      children: args.children,
    })
  },
  argTypes: {
    children: { control: 'text' },
    tag: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
    },
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption', 'overline'],
    },
    truncate: { control: 'boolean' },
    noWrap: { control: 'boolean' },
    userSelect: { control: 'boolean' },
    className: { control: 'text' },
    loading: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj

export const Heading1: Story = {
  args: {
    tag: 'h1',
    variant: 'h1',
    children: 'Heading 1',
  },
}

export const Heading2: Story = {
  args: {
    tag: 'h2',
    variant: 'h2',
    children: 'Heading 2',
  },
}

export const Heading3: Story = {
  args: {
    tag: 'h3',
    variant: 'h3',
    children: 'Heading 3',
  },
}

export const Body1: Story = {
  args: {
    tag: 'p',
    variant: 'body1',
    children: 'This is body1 text. Perfect for regular paragraphs and content.',
  },
}

export const Body2: Story = {
  args: {
    tag: 'p',
    variant: 'body2',
    children: 'This is body2 text. Slightly smaller for secondary content.',
  },
}

export const Caption: Story = {
  args: {
    tag: 'span',
    variant: 'caption',
    children: 'This is caption text for small annotations.',
  },
}

export const Overline: Story = {
  args: {
    tag: 'span',
    variant: 'overline',
    children: 'Overline Text',
  },
}

export const Truncated: Story = {
  args: {
    tag: 'p',
    variant: 'body1',
    truncate: true,
    children: 'This is a very long text that will be truncated with an ellipsis when it exceeds the container width',
    className: 'max-w-xs',
  },
}

export const NoWrap: Story = {
  args: {
    tag: 'span',
    variant: 'body1',
    noWrap: true,
    children: 'This text will not wrap to a new line',
  },
}

export const CustomColor: Story = {
  args: {
    tag: 'p',
    variant: 'body1',
    children: 'Custom colored text',
    className: 'text-primary-600',
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

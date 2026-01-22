import type { Meta, StoryObj } from '@storybook/html'
import { Typography } from '../components/atoms/typography'
import { Button } from '../components/molecules/button'
import { Card } from '../components/organisms/card'
import { ComponentConfigBuilder } from '../components/utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../components/utils/component-styling-builder/component-styling-builder'

/**
 * Card component - Organism for content containers
 * 
 * Supports header, body (children), and footer sections
 */
const meta: Meta = {
  title: 'Organisms/Card',
  tags: ['autodocs'],
  render: (args) => {
    const config = new ComponentConfigBuilder('primary')
      .rounded(args.rounded || 'lg')
      .build()

    const styling = new ComponentStylingBuilder()
      .base('bg-white')
      .border('border border-neutral-200')
      .build()

    // Create header if needed
    let header: HTMLElement | undefined
    if (args.showHeader) {
      const headerDiv = document.createElement('div')
      headerDiv.className = 'px-6 py-4 border-b border-neutral-200'
      headerDiv.appendChild(Typography({
        tag: 'h3',
        variant: 'h6',
        config: new ComponentConfigBuilder('primary').build(),
        children: 'Card Title'
      }))
      header = headerDiv
    }

    // Create footer if needed
    let footer: HTMLElement | undefined
    if (args.showFooter) {
      const footerDiv = document.createElement('div')
      footerDiv.className = 'px-6 py-4 border-t border-neutral-200 flex justify-end gap-2'
      footerDiv.appendChild(Button({
        config: new ComponentConfigBuilder('secondary').size('sm').build(),
        children: 'Cancel'
      }))
      footerDiv.appendChild(Button({
        config: new ComponentConfigBuilder('primary').size('sm').build(),
        children: 'Save'
      }))
      footer = footerDiv
    }

    // Create children
    const childrenDiv = document.createElement('div')
    childrenDiv.className = 'px-6 py-4'
    childrenDiv.appendChild(Typography({
      tag: 'p',
      variant: 'body1',
      config: new ComponentConfigBuilder('primary').build(),
      children: args.content || 'Card content goes here. This is the main body of the card.'
    }))

    return Card({
      config,
      styling,
      header,
      footer,
      elevation: args.elevation,
      bordered: args.bordered,
      children: childrenDiv,
    })
  },
  argTypes: {
    content: { control: 'text' },
    showHeader: { control: 'boolean' },
    showFooter: { control: 'boolean' },
    elevation: { control: 'boolean' },
    bordered: { control: 'boolean' },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj

export const Default: Story = {
  args: {
    content: 'Basic card with just body content.',
  },
}

export const WithHeader: Story = {
  args: {
    content: 'Card with header section.',
    showHeader: true,
  },
}

export const WithFooter: Story = {
  args: {
    content: 'Card with footer actions.',
    showFooter: true,
  },
}

export const Complete: Story = {
  args: {
    content: 'Complete card with header, body, and footer.',
    showHeader: true,
    showFooter: true,
  },
}

export const WithElevation: Story = {
  args: {
    content: 'Card with shadow elevation.',
    showHeader: true,
    elevation: true,
  },
}

export const Bordered: Story = {
  args: {
    content: 'Card with border.',
    showHeader: true,
    bordered: true,
  },
}

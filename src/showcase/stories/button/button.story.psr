/**
 * Button Component Stories
 * Example story configurations for Button component playground
 */

import { Button } from '../../../components/molecules/button';
import { ComponentConfigBuilder } from '../../../components/utils/component-config-builder/component-config-builder';
import type { Story } from '../../playground/story.types';

/**
 * Basic Button Story
 */
export const BasicButtonStory: Story = {
  id: 'button-basic',
  title: 'Basic Button',
  description: 'A simple button with default styling',
  component: Button,
  props: {
    children: 'Click Me',
    onclick: (e: Event) => {
      console.log('Button clicked!', e);
    },
  },
  events: [
    {
      name: 'onclick',
      label: 'Click',
      capture: true,
    },
  ],
  metadata: {
    category: 'molecules',
    tags: ['interactive', 'form'],
    related: ['input', 'checkbox', 'toggle'],
  },
};

/**
 * Button Variants Story
 */
export const ButtonVariantsStory: Story = {
  id: 'button-variants',
  title: 'Button Variants',
  description: 'Different button styling variants',
  component: Button,
  props: {
    config: new ComponentConfigBuilder('primary').variant('outline').size('md').build(),
    children: 'Outline Button',
  },
  events: [
    {
      name: 'onclick',
      label: 'Click',
      capture: true,
    },
  ],
  metadata: {
    category: 'molecules',
    tags: ['variants', 'styling'],
  },
};

/**
 * Disabled Button Story
 */
export const DisabledButtonStory: Story = {
  id: 'button-disabled',
  title: 'Disabled Button',
  description: 'Button in disabled state',
  component: Button,
  props: {
    config: new ComponentConfigBuilder('primary').disabled(true).build(),
    children: 'Disabled Button',
  },
  events: [
    {
      name: 'onclick',
      label: 'Click',
      capture: true,
    },
  ],
  metadata: {
    category: 'molecules',
    tags: ['states', 'disabled'],
  },
};

/**
 * Loading Button Story
 */
export const LoadingButtonStory: Story = {
  id: 'button-loading',
  title: 'Loading Button',
  description: 'Button showing loading skeleton',
  component: Button,
  props: {
    config: new ComponentConfigBuilder('primary').loading(true).build(),
    children: 'Loading...',
  },
  metadata: {
    category: 'molecules',
    tags: ['states', 'loading'],
  },
};

/**
 * Export all button stories
 */
export const buttonStories: Story[] = [
  BasicButtonStory,
  ButtonVariantsStory,
  DisabledButtonStory,
  LoadingButtonStory,
];

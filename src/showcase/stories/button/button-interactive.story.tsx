/**
 * Button Stories with PropEditor Support
 * Enhanced examples showing interactive prop manipulation
 */

import { Button } from '../../../components/molecules/button';
import type { PropEditorConfig } from '../../playground/prop-editors';
import type { Story } from '../../playground/story.types';

/**
 * Basic Button Story with Editable Props
 */
export const basicButtonStory: Story = {
  id: 'button-basic',
  title: 'Basic Button',
  description: 'A simple button with editable text and variant',
  component: (props) => <Button {...props} />,
  props: {
    children: 'Click Me',
    variant: 'primary',
  },
  propEditors: [
    {
      name: 'children',
      label: 'Button Text',
      type: 'string',
      value: 'Click Me',
      defaultValue: 'Click Me',
      description: 'The text displayed on the button',
      required: true,
    },
    {
      name: 'variant',
      label: 'Variant',
      type: 'string',
      value: 'primary',
      defaultValue: 'primary',
      description: 'Visual style variant',
    },
    {
      name: 'disabled',
      label: 'Disabled',
      type: 'boolean',
      value: false,
      defaultValue: false,
      description: 'Disable button interactions',
    },
  ] as PropEditorConfig[],
  events: [
    {
      name: 'onClick',
      label: 'Click Event',
      capture: true,
    },
  ],
  metadata: {
    tags: ['interactive', 'molecule', 'form'],
  },
};

/**
 * Button with Loading State
 */
export const loadingButtonStory: Story = {
  id: 'button-loading',
  title: 'Loading Button',
  description: 'Button with loading state and configurable text',
  component: (props) => <Button {...props} />,
  props: {
    children: 'Submit',
    variant: 'primary',
    loading: true,
  },
  propEditors: [
    {
      name: 'children',
      label: 'Button Text',
      type: 'string',
      value: 'Submit',
      defaultValue: 'Submit',
    },
    {
      name: 'loading',
      label: 'Loading State',
      type: 'boolean',
      value: true,
      defaultValue: false,
      description: 'Show loading spinner',
    },
    {
      name: 'disabled',
      label: 'Disabled',
      type: 'boolean',
      value: false,
      defaultValue: false,
    },
  ] as PropEditorConfig[],
  metadata: {
    tags: ['loading', 'async'],
  },
};

/**
 * Button Sizes
 */
export const buttonSizesStory: Story = {
  id: 'button-sizes',
  title: 'Button Sizes',
  description: 'Buttons in different sizes',
  component: (props) => <Button {...props} />,
  props: {
    children: 'Medium Button',
    size: 'md',
    variant: 'primary',
  },
  propEditors: [
    {
      name: 'children',
      label: 'Button Text',
      type: 'string',
      value: 'Medium Button',
      defaultValue: 'Button',
    },
    {
      name: 'size',
      label: 'Size',
      type: 'string',
      value: 'md',
      defaultValue: 'md',
      description: 'Button size (sm, md, lg)',
    },
  ] as PropEditorConfig[],
  metadata: {
    tags: ['sizes', 'variants'],
  },
};

/**
 * Full Width Button
 */
export const fullWidthButtonStory: Story = {
  id: 'button-full-width',
  title: 'Full Width Button',
  description: 'Button that spans the full container width',
  component: (props) => <Button {...props} />,
  props: {
    children: 'Full Width Button',
    variant: 'primary',
    fullWidth: true,
  },
  propEditors: [
    {
      name: 'children',
      label: 'Button Text',
      type: 'string',
      value: 'Full Width Button',
      defaultValue: 'Button',
    },
    {
      name: 'fullWidth',
      label: 'Full Width',
      type: 'boolean',
      value: true,
      defaultValue: false,
      description: 'Expand to container width',
    },
  ] as PropEditorConfig[],
  metadata: {
    tags: ['layout', 'responsive'],
  },
};

/**
 * Export all button stories
 */
export const buttonStories: Story[] = [
  basicButtonStory,
  loadingButtonStory,
  buttonSizesStory,
  fullWidthButtonStory,
];

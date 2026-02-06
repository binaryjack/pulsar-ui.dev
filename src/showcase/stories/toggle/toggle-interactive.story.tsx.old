/**
 * Toggle Component Interactive Stories
 * Demonstrates Toggle component with playground
 */

import { Toggle } from '../../../components/atoms/toggle';
import type { Story } from '../../playground/story.types';

/**
 * Basic Toggle Story
 */
export const basicToggleStory: Story = {
  id: 'basic-toggle',
  title: 'Basic Toggle',
  description: 'Simple on/off toggle switch',
  component: (props) => <Toggle {...props} />,
  props: {
    checked: false,
  },
  propEditors: [
    {
      name: 'checked',
      label: 'Checked',
      type: 'boolean',
      value: false,
      defaultValue: false,
      description: 'Toggle state',
    },
    {
      name: 'disabled',
      label: 'Disabled',
      type: 'boolean',
      value: false,
      defaultValue: false,
    },
  ],
  events: [
    {
      name: 'onchange',
      label: 'Toggle Changed',
      capture: true,
    },
  ],
  metadata: {
    category: 'atoms',
    tags: ['toggle', 'switch', 'form', 'boolean'],
  },
};

/**
 * Toggle with Label Story
 */
export const toggleWithLabelStory: Story = {
  id: 'toggle-with-label',
  title: 'Toggle with Label',
  description: 'Toggle with descriptive label',
  component: (props) => <Toggle {...props} />,
  props: {
    checked: false,
    label: 'Enable notifications',
  },
  propEditors: [
    {
      name: 'label',
      label: 'Label Text',
      type: 'string',
      value: 'Enable notifications',
      defaultValue: 'Enable notifications',
    },
    {
      name: 'checked',
      label: 'Checked',
      type: 'boolean',
      value: false,
      defaultValue: false,
    },
    {
      name: 'disabled',
      label: 'Disabled',
      type: 'boolean',
      value: false,
      defaultValue: false,
    },
  ],
  events: [
    {
      name: 'onchange',
      label: 'Toggle Changed',
      capture: true,
    },
  ],
  metadata: {
    category: 'atoms',
    tags: ['toggle', 'switch', 'form', 'label'],
  },
};

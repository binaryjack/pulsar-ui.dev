/**
 * Input Component Interactive Stories
 * Demonstrates Input component with playground
 */

import { Input } from '../../../components/atoms/input';
import type { Story } from '../../playground/story.types';

/**
 * Basic Input Story
 */
export const basicInputStory: Story = {
  id: 'basic-input',
  title: 'Basic Input',
  description: 'Standard text input with customizable placeholder',
  component: (props) => <Input {...props} />,
  props: {
    type: 'text',
    placeholder: 'Enter text...',
    value: '',
  },
  propEditors: [
    {
      name: 'value',
      label: 'Value',
      type: 'string',
      value: '',
      defaultValue: '',
      description: 'Current input value',
    },
    {
      name: 'placeholder',
      label: 'Placeholder',
      type: 'string',
      value: 'Enter text...',
      defaultValue: 'Enter text...',
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
      name: 'oninput',
      label: 'Input Changed',
      capture: true,
    },
  ],
  metadata: {
    category: 'atoms',
    tags: ['input', 'form', 'text'],
  },
};

/**
 * Email Input Story
 */
export const emailInputStory: Story = {
  id: 'email-input',
  title: 'Email Input',
  description: 'Email-specific input validation',
  component: (props) => <Input {...props} />,
  props: {
    type: 'email',
    placeholder: 'your@email.com',
    value: '',
  },
  propEditors: [
    {
      name: 'value',
      label: 'Email Value',
      type: 'string',
      value: '',
      defaultValue: '',
    },
    {
      name: 'required',
      label: 'Required',
      type: 'boolean',
      value: false,
      defaultValue: false,
    },
  ],
  events: [
    {
      name: 'oninput',
      label: 'Email Input',
      capture: true,
    },
  ],
  metadata: {
    category: 'atoms',
    tags: ['input', 'form', 'email', 'validation'],
  },
};

/**
 * Password Input Story
 */
export const passwordInputStory: Story = {
  id: 'password-input',
  title: 'Password Input',
  description: 'Secure password input field',
  component: (props) => <Input {...props} />,
  props: {
    type: 'password',
    placeholder: 'Enter password',
    value: '',
  },
  propEditors: [
    {
      name: 'value',
      label: 'Password',
      type: 'string',
      value: '',
      defaultValue: '',
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
      name: 'oninput',
      label: 'Password Input',
      capture: true,
    },
  ],
  metadata: {
    category: 'atoms',
    tags: ['input', 'form', 'password', 'security'],
  },
};

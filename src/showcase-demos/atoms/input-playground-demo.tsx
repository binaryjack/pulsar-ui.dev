/**
 * Input Component Demo - Playground Implementation
 * Replaces the old InputDemo with story-based playground
 */

import { ComponentPlaygroundPage } from '../../showcase/pages/component-playground-page';
import {
  basicInputStory,
  emailInputStory,
  passwordInputStory,
} from '../../showcase/stories/input/input-interactive.story';

export const InputPlaygroundDemo = (): HTMLElement => {
  return ComponentPlaygroundPage({
    title: 'Input',
    description:
      'Text input field with validation, different types, and customizable appearance. Test different configurations interactively.',
    category: 'atoms',
    stories: [basicInputStory, emailInputStory, passwordInputStory],
  });
};

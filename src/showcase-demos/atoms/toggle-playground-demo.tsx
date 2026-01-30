/**
 * Toggle Component Demo - Playground Implementation
 * Replaces the old ToggleDemo with story-based playground
 */

import { ComponentPlaygroundPage } from '../../showcase/pages/component-playground-page';
import {
  basicToggleStory,
  toggleWithLabelStory,
} from '../../showcase/stories/toggle/toggle-interactive.story';

export const TogglePlaygroundDemo = (): HTMLElement => {
  return ComponentPlaygroundPage({
    title: 'Toggle',
    description: 'Switch component for binary on/off states. Perfect for settings and preferences.',
    category: 'atoms',
    stories: [basicToggleStory, toggleWithLabelStory],
  });
};

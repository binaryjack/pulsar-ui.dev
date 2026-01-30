/**
 * Button Component Demo - Playground Implementation
 * Replaces the old ButtonDemo with story-based playground
 */

import { ComponentPlaygroundPage } from '../../showcase/pages/component-playground-page';
import {
  basicButtonStory,
  buttonSizesStory,
  fullWidthButtonStory,
  loadingButtonStory,
} from '../../showcase/stories/button/button-interactive.story';

export const ButtonPlaygroundDemo = (): HTMLElement => {
  return ComponentPlaygroundPage({
    title: 'Button',
    description:
      'Interactive button component with multiple variants, sizes, and states. Edit props in real-time and see changes instantly.',
    category: 'molecules',
    stories: [basicButtonStory, loadingButtonStory, buttonSizesStory, fullWidthButtonStory],
  });
};

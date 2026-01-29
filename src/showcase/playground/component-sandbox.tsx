/**
 * ComponentSandbox - Core Playground Presenter
 * Renders Story configurations with component, props, context, and event logging
 * 
 * This is the heart of the Pulsar Playground system.
 */

import { Stack } from '../../components/atoms/stack';
import { Card } from '../../components/organisms/card';
import { Typography } from '../../components/atoms/typography';
import { Divider } from '../../components/atoms/divider';
import type { Story, LoggedEvent } from './story.types';

export interface IComponentSandboxProps {
  /** The story configuration to render */
  story: Story;

  /** Callback when events are captured */
  onEventLog?: (event: LoggedEvent) => void;

  /** Whether to show component info header */
  showHeader?: boolean;

  /** Custom CSS class */
  class?: string;
}

/**
 * ComponentSandbox
 * Generic presenter that renders any component with its story configuration
 * Handles context providers, event logging, and prop injection
 */
export const ComponentSandbox = ({
  story,
  onEventLog,
  showHeader = true,
  class: className,
}: IComponentSandboxProps): HTMLElement => {
  /**
   * Wrap component with context providers if specified
   */
  const wrapWithContexts = (component: HTMLElement): HTMLElement => {
    if (!story.context || story.context.length === 0) {
      return component;
    }

    // Wrap component with each context provider (innermost to outermost)
    return story.context.reduceRight((wrapped, context) => {
      return context.provider({ children: wrapped });
    }, component);
  };

  /**
   * Enhance props with event handlers for logging
   */
  const enhancePropsWithEventHandlers = (props: Record<string, any>): Record<string, any> => {
    if (!story.events || story.events.length === 0) {
      return props;
    }

    const enhancedProps = { ...props };

    story.events.forEach((eventConfig) => {
      if (eventConfig.capture !== false) {
        const originalHandler = props[eventConfig.name];

        enhancedProps[eventConfig.name] = (event: Event) => {
          // Log the event
          const loggedEvent: LoggedEvent = {
            id: `evt-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            name: eventConfig.label || eventConfig.name,
            timestamp: Date.now(),
            data: event,
            target: event.target
              ? {
                  tagName: (event.target as HTMLElement).tagName,
                  id: (event.target as HTMLElement).id,
                  className: (event.target as HTMLElement).className,
                }
              : undefined,
          };

          if (onEventLog) {
            onEventLog(loggedEvent);
          }

          // Call custom event handler if provided
          if (eventConfig.handler) {
            eventConfig.handler(event);
          }

          // Call original handler if it exists
          if (originalHandler) {
            originalHandler(event);
          }
        };
      }
    });

    return enhancedProps;
  };

  /**
   * Render the component with enhanced props
   */
  const renderComponent = (): HTMLElement => {
    const enhancedProps = enhancePropsWithEventHandlers(story.props);
    const component = story.component(enhancedProps);
    return wrapWithContexts(component);
  };

  return (
    <Stack direction="vertical" spacing="md" className={className}>
      {/* Story Header */}
      {showHeader && (
        <Stack direction="vertical" spacing="xs">
          <Typography tag="h3" variant="h3">
            {story.title}
          </Typography>
          {story.description && (
            <Typography tag="p" variant="body2" className="text-neutral-600">
              {story.description}
            </Typography>
          )}
          {story.metadata?.tags && story.metadata.tags.length > 0 && (
            <Stack direction="horizontal" spacing="xs">
              {story.metadata.tags.map((tag) => (
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md bg-primary-100 text-primary-800">
                  {tag}
                </span>
              ))}
            </Stack>
          )}
        </Stack>
      )}

      {showHeader && <Divider />}

      {/* Component Rendering Area */}
      <Card>
        <div className="p-6">{renderComponent()}</div>
      </Card>
    </Stack>
  );
};

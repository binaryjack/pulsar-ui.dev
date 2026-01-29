/**
 * Playground Demo Page
 * Demonstrates the ComponentSandbox with example stories
 */

import { Stack } from '../../components/atoms/stack';
import { Typography } from '../../components/atoms/typography';
import { Container } from '../../components/atoms/container';
import { Card } from '../../components/organisms/card';
import { ComponentSandbox } from '../playground/component-sandbox';
import { RetractablePanel } from '../../components/organisms/retractable-panel';
import { buttonStories } from '../stories/button/button.story';
import type { LoggedEvent } from '../playground/story.types';

/**
 * PlaygroundDemo - Showcases the new playground system
 */
export const PlaygroundDemo = (): HTMLElement => {
  // State for logged events
  const loggedEvents: LoggedEvent[] = [];
  const isPanelExpanded = true; // TODO: Connect to actual state management

  const handleEventLog = (event: LoggedEvent) => {
    loggedEvents.push(event);
    console.log('Event logged:', event);
  };

  const handlePanelToggle = (isExpanded: boolean) => {
    console.log('Panel toggled:', isExpanded);
    // TODO: Update state
  };

  return (
    <Container maxWidth="2xl" padding="lg">
      <Stack direction="vertical" spacing="xl">
        {/* Page Header */}
        <Stack direction="vertical" spacing="sm">
          <Typography tag="h1" variant="h1">
            Pulsar Playground
          </Typography>
          <Typography tag="p" variant="body1" className="text-neutral-600">
            Interactive component sandbox with prop editing, event logging, and code generation
          </Typography>
        </Stack>

        {/* Introduction Card */}
        <Card>
          <Stack direction="vertical" spacing="md">
            <Typography tag="h2" variant="h2">
              Welcome to the Playground! 🎨
            </Typography>
            <Typography tag="p" variant="body1">
              This is the new Pulsar Playground system - a lightweight Storybook alternative built
              entirely with Pulsar components.
            </Typography>
            <Typography tag="p" variant="body2">
              Features:
            </Typography>
            <ul className="list-disc list-inside space-y-1 text-neutral-700">
              <li>Interactive component sandbox with live prop editing</li>
              <li>Event logging with retractable panel</li>
              <li>Context provider support for complex components</li>
              <li>Code generation with syntax highlighting</li>
              <li>Story-based configuration (no Storybook overhead)</li>
              <li>100% Pulsar components (declarative, type-safe)</li>
            </ul>
          </Stack>
        </Card>

        {/* Example Stories */}
        <Stack direction="vertical" spacing="lg">
          <Typography tag="h2" variant="h2">
            Example Stories
          </Typography>

          {buttonStories.map((story) => (
            <ComponentSandbox
              story={story}
              onEventLog={handleEventLog}
              showHeader={true}
            />
          ))}
        </Stack>

        {/* Event Logger Demo */}
        <Stack direction="vertical" spacing="md">
          <Typography tag="h2" variant="h2">
            Event Logger (RetractablePanel Demo)
          </Typography>

          <RetractablePanel
            header={
              <Stack direction="horizontal" spacing="sm" className="items-center">
                <Typography tag="h3" variant="h6" classNameName="font-semibold">
                  Event Log
                </Typography>
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-800">
                  {loggedEvents.length} events
                </span>
              </Stack>
            }
            isExpanded={isPanelExpanded}
            onToggle={handlePanelToggle}
            direction="vertical"
            maxHeight="300px"
            position="none"
          >
            <Stack direction="vertical" spacing="sm">
              {loggedEvents.length === 0 ? (
                <Typography tag="p" variant="body2" className="text-neutral-500 italic">
                  No events logged yet. Interact with the components above to see events appear
                  here.
                </Typography>
              ) : (
                loggedEvents.map((event) => (
                  <Card>
                    <Stack direction="vertical" spacing="xs">
                      <Stack direction="horizontal" spacing="sm" className="items-center">
                        <Typography tag="span" variant="body2" classNameName="font-semibold">
                          {event.name}
                        </Typography>
                        <Typography tag="span" variant="caption" className="text-neutral-500">
                          {new Date(event.timestamp).toLocaleTimeString()}
                        </Typography>
                      </Stack>
                      <Typography tag="pre" variant="caption" className="bg-neutral-50 p-2 rounded">
                        {JSON.stringify(event.target, null, 2)}
                      </Typography>
                    </Stack>
                  </Card>
                ))
              )}
            </Stack>
          </RetractablePanel>
        </Stack>

        {/* Implementation Status */}
        <Card>
          <Stack direction="vertical" spacing="md">
            <Typography tag="h2" variant="h2">
              Implementation Status
            </Typography>
            <Stack direction="vertical" spacing="xs">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-800 text-sm font-bold">
                  ✓
                </span>
                <Typography tag="span" variant="body2">
                  Component Audit Complete (40/42 components ready)
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-800 text-sm font-bold">
                  ✓
                </span>
                <Typography tag="span" variant="body2">
                  Missing Demos Created (Container, Grid, Select)
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-800 text-sm font-bold">
                  ✓
                </span>
                <Typography tag="span" variant="body2">
                  RetractablePanel Component Implemented
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-800 text-sm font-bold">
                  ✓
                </span>
                <Typography tag="span" variant="body2">
                  ComponentSandbox Core Built
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-800 text-sm font-bold">
                  ✓
                </span>
                <Typography tag="span" variant="body2">
                  Story Type System Defined
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-sm font-bold">
                  →
                </span>
                <Typography tag="span" variant="body2">
                  Next: PropEditor System (String, Boolean, Number editors)
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-neutral-100 text-neutral-600 text-sm font-bold">
                  ○
                </span>
                <Typography tag="span" variant="body2" className="text-neutral-600">
                  Pending: CodeHighlighter with Prism.js
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-neutral-100 text-neutral-600 text-sm font-bold">
                  ○
                </span>
                <Typography tag="span" variant="body2" className="text-neutral-600">
                  Pending: Raw Component Gallery (40 components)
                </Typography>
              </div>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
};

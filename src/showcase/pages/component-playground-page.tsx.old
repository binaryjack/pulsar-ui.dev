/**
 * Component Playground Page - Universal Story-based Demo Page
 * PURE DECLARATIVE JSX - No imperative code, transformer handles everything
 */

import { useState } from '@pulsar-framework/pulsar.dev';
import { Container } from '../../components/atoms/container';
import { Stack } from '../../components/atoms/stack';
import { Typography } from '../../components/atoms/typography';
import { Card } from '../../components/organisms/card';
import { RetractablePanel } from '../../components/organisms/retractable-panel/retractable-panel';
import { ComponentSandbox } from '../playground/component-sandbox';
import { EventLoggerPanel } from '../playground/event-logger-panel';
import type { LoggedEvent, Story } from '../playground/story.types';

export interface IComponentPlaygroundPageProps {
  title: string;
  description: string;
  stories: Story[];
  category?: 'atoms' | 'molecules' | 'organisms';
}

/**
 * ComponentPlaygroundPage - Universal playground-based demo page
 * Uses pure JSX - transformer handles conditionals, arrays, and children
 */
export const ComponentPlaygroundPage = ({
  title,
  description,
  stories,
  category = 'molecules',
}: IComponentPlaygroundPageProps): HTMLElement => {
  const [loggedEvents, setLoggedEvents] = useState<LoggedEvent[]>([]);
  const [isPanelExpanded, setIsPanelExpanded] = useState<boolean>(false);

  const handleEventLog = (event: LoggedEvent) => {
    setLoggedEvents([...loggedEvents(), event]);
  };

  return (
    <Container maxWidth="2xl" padding="lg">
      <Stack direction="vertical" spacing="xl">
        {/* Page Header */}
        <Stack direction="vertical" spacing="sm">
          <div className="flex items-center gap-2">
            <Typography tag="h1" variant="h1">
              {title}
            </Typography>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-700">
              {category}
            </span>
          </div>
          <Typography tag="p" variant="body1" className="text-neutral-700">
            {description}
          </Typography>
        </Stack>

        {/* Story Examples - Transformer handles .map() */}
        {stories.map((story) => (
          <ComponentSandbox story={story} onEventLog={handleEventLog} />
        ))}

        {/* Event Logger - Transformer handles conditionals */}
        {loggedEvents().length > 0 && (
          <RetractablePanel isExpanded={isPanelExpanded()} onToggle={setIsPanelExpanded}>
            <EventLoggerPanel events={loggedEvents()} onClear={() => setLoggedEvents([])} />
          </RetractablePanel>
        )}

        {/* Empty State - Transformer handles conditionals */}
        {stories.length === 0 && (
          <Card>
            <Stack direction="vertical" spacing="md">
              <Typography tag="h3" variant="h3">
                📚 Stories Coming Soon
              </Typography>
              <Typography tag="p" variant="body2">
                Interactive stories for this component are being created. Check back soon!
              </Typography>
            </Stack>
          </Card>
        )}
      </Stack>
    </Container>
  );
};

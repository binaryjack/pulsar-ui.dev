/**
 * Pulsar UI Showcase - Demo Section Component
 * Refactored to use Pulsar UI components
 */

import { Divider } from '../components/atoms/divider';
import { Typography } from '../components/atoms/typography';
import { Card } from '../components/organisms/card';
import type { IDemoSectionProps } from '../types';

export const DemoSection = ({ title, description, children }: IDemoSectionProps): HTMLElement => {
  return (
    <section className="mb-8">
      {/* Section Header */}
      <div className="mb-4">
        <Typography variant="h3" className="mb-2 font-semibold">
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" className="text-muted">
            {description}
          </Typography>
        )}
      </div>
      <Divider className="mb-4" />

      {/* Demo Content Card */}
      <Card elevation bordered>
        {children}
      </Card>
    </section>
  );
};

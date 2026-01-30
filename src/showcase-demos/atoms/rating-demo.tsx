/**
 * Rating Component Demo
 */

import { useState } from '@pulsar-framework/pulsar.dev';
import { Rating } from '../../components/atoms/rating';
import { Stack } from '../../components/atoms/stack';
import { DemoSection } from '../../showcase-components/demo-section';
import { CodeBlock } from '../../showcase-components/code-block';

export const RatingDemo = (): HTMLElement => {
  const [rating1, setRating1] = useState(3);
  const [rating2, setRating2] = useState(4.5);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Rating</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Star rating component with interactive and readOnly modes, half-star support.
        </p>
      </div>

      <DemoSection title="Sizes" description="Rating available in 4 sizes">
        <Stack direction="vertical" spacing="lg">
          <Rating size="sm" value={4} readOnly />
          <Rating size="md" value={4} readOnly />
          <Rating size="lg" value={4} readOnly />
          <Rating size="xl" value={4} readOnly />
        </Stack>
        <CodeBlock
          code={`<Rating size="sm" value={4} />
<Rating size="lg" value={4} />`}
        />
      </DemoSection>

      <DemoSection title="Interactive" description="Click to rate">
        <div className="space-y-4">
          <div>
            <Rating value={rating1} onChange={setRating1} size="lg" />
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Current rating: {rating1} / 5
            </p>
          </div>
        </div>
        <CodeBlock
          code={`const [rating, setRating] = useState(3)

<Rating
  value={rating}
  onChange={setRating}
  size="lg"
/>`}
        />
      </DemoSection>

      <DemoSection title="Half Stars" description="Allow half-star ratings">
        <div className="space-y-4">
          <div>
            <Rating value={rating2} onChange={setRating2} allowHalf size="lg" />
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Current rating: {rating2} / 5
            </p>
          </div>
        </div>
        <CodeBlock
          code={`<Rating
  value={4.5}
  allowHalf
  onChange={(val) => console.log(val)}
/>`}
        />
      </DemoSection>

      <DemoSection title="Readonly" description="Display rating without interaction">
        <Stack direction="vertical" spacing="md">
          <div className="flex items-center gap-2">
            <Rating value={5} readOnly size="md" />
            <span className="text-sm text-gray-600 dark:text-gray-400">5.0 (127 reviews)</span>
          </div>
          <div className="flex items-center gap-2">
            <Rating value={4} readOnly size="md" />
            <span className="text-sm text-gray-600 dark:text-gray-400">4.0 (89 reviews)</span>
          </div>
          <div className="flex items-center gap-2">
            <Rating value={3.5} allowHalf readOnly size="md" />
            <span className="text-sm text-gray-600 dark:text-gray-400">3.5 (45 reviews)</span>
          </div>
        </Stack>
        <CodeBlock
          code={`<Rating value={4.5} readOnly allowHalf />
<span>4.5 (89 reviews)</span>`}
        />
      </DemoSection>
    </div>
  );
};

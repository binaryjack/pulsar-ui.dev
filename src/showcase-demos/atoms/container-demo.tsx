/**
 * Container Component Demo
 * Demonstrates responsive max-width container patterns
 */

import { Container } from '../../components/atoms/container';
import { Stack } from '../../components/atoms/stack';
import { Typography } from '../../components/atoms/typography';
import { Card } from '../../components/organisms/card';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const ContainerDemo = (): HTMLElement => {
  return (
    <Stack direction="vertical" spacing="lg">
      {/* Max Width Variants */}
      <DemoSection
        title="Max Width Variants"
        description="Different max-width constraints for responsive layouts"
      >
        <Stack direction="vertical" spacing="md">
          <Container maxWidth="xs" padding="md" centered>
            <Card>
              <Typography tag="p" variant="body1">
                Extra Small (max-w-xs) - Perfect for narrow content like mobile-first designs
              </Typography>
            </Card>
          </Container>

          <Container maxWidth="sm" padding="md" centered>
            <Card>
              <Typography tag="p" variant="body1">
                Small (max-w-sm) - Suitable for compact forms and dialog content
              </Typography>
            </Card>
          </Container>

          <Container maxWidth="md" padding="md" centered>
            <Card>
              <Typography tag="p" variant="body1">
                Medium (max-w-md) - Good for single-column content and narrow articles
              </Typography>
            </Card>
          </Container>

          <Container maxWidth="lg" padding="md" centered>
            <Card>
              <Typography tag="p" variant="body1">
                Large (max-w-lg) - Ideal for blog posts and standard content width
              </Typography>
            </Card>
          </Container>

          <Container maxWidth="xl" padding="md" centered>
            <Card>
              <Typography tag="p" variant="body1">
                Extra Large (max-w-xl) - Great for wide content and documentation pages
              </Typography>
            </Card>
          </Container>

          <Container maxWidth="2xl" padding="md" centered>
            <Card>
              <Typography tag="p" variant="body1">
                2XL (max-w-2xl) - Perfect for dashboards and data-heavy interfaces
              </Typography>
            </Card>
          </Container>

          <Container maxWidth="full" padding="md" centered>
            <Card>
              <Typography tag="p" variant="body1">
                Full (max-w-full) - Uses full viewport width, no constraint
              </Typography>
            </Card>
          </Container>
        </Stack>

        <CodeBlock
          code={`<Container maxWidth="lg" padding="md" centered>
  <Typography tag="p">Content goes here</Typography>
</Container>`}
        />
      </DemoSection>

      {/* Padding Variants */}
      <DemoSection
        title="Padding Variants"
        description="Different horizontal padding options for content spacing"
      >
        <Stack direction="vertical" spacing="md">
          <Container maxWidth="xl" padding="none">
            <Card>
              <Typography tag="p" variant="body1">
                No Padding - Content extends to container edges
              </Typography>
            </Card>
          </Container>

          <Container maxWidth="xl" padding="xs">
            <Card>
              <Typography tag="p" variant="body1">
                Extra Small Padding (px-2) - Minimal spacing
              </Typography>
            </Card>
          </Container>

          <Container maxWidth="xl" padding="sm">
            <Card>
              <Typography tag="p" variant="body1">
                Small Padding (px-4) - Comfortable mobile spacing
              </Typography>
            </Card>
          </Container>

          <Container maxWidth="xl" padding="md">
            <Card>
              <Typography tag="p" variant="body1">
                Medium Padding (px-6) - Default balanced spacing
              </Typography>
            </Card>
          </Container>

          <Container maxWidth="xl" padding="lg">
            <Card>
              <Typography tag="p" variant="body1">
                Large Padding (px-8) - Generous breathing room
              </Typography>
            </Card>
          </Container>

          <Container maxWidth="xl" padding="xl">
            <Card>
              <Typography tag="p" variant="body1">
                Extra Large Padding (px-12) - Maximum horizontal space
              </Typography>
            </Card>
          </Container>
        </Stack>

        <CodeBlock
          code={`<Container maxWidth="xl" padding="lg">
  <Typography tag="p">Well-padded content</Typography>
</Container>`}
        />
      </DemoSection>

      {/* Centered vs Not Centered */}
      <DemoSection
        title="Alignment Options"
        description="Center container horizontally or align to left"
      >
        <Stack direction="vertical" spacing="md">
          <Container maxWidth="md" padding="md" centered={true}>
            <Card>
              <Typography tag="p" variant="body1">
                Centered (default) - Container centered with mx-auto
              </Typography>
            </Card>
          </Container>

          <Container maxWidth="md" padding="md" centered={false}>
            <Card>
              <Typography tag="p" variant="body1">
                Not Centered - Container aligned to left edge
              </Typography>
            </Card>
          </Container>
        </Stack>

        <CodeBlock
          code={`<Container maxWidth="md" padding="md" centered={false}>
  <Typography tag="p">Left-aligned container</Typography>
</Container>`}
        />
      </DemoSection>

      {/* Nested Containers */}
      <DemoSection
        title="Nested Containers"
        description="Containers can be nested for progressive width constraints"
      >
        <Container maxWidth="2xl" padding="lg">
          <Card>
            <Stack direction="vertical" spacing="md">
              <Typography tag="p" variant="body1">
                Outer Container (2XL) - Wide dashboard layout
              </Typography>

              <Container maxWidth="lg" padding="md" centered>
                <Card>
                  <Typography tag="p" variant="body2">
                    Inner Container (LG) - Constrained content within dashboard
                  </Typography>
                </Card>
              </Container>
            </Stack>
          </Card>
        </Container>

        <CodeBlock
          code={`<Container maxWidth="2xl" padding="lg">
  <Container maxWidth="lg" padding="md" centered>
    <Typography tag="p">Nested content</Typography>
  </Container>
</Container>`}
        />
      </DemoSection>

      {/* Common Use Cases */}
      <DemoSection
        title="Common Use Cases"
        description="Real-world container patterns for different layouts"
      >
        <Stack direction="vertical" spacing="md">
          {/* Blog Post */}
          <Container maxWidth="lg" padding="md" centered>
            <Card>
              <Stack direction="vertical" spacing="sm">
                <Typography tag="h3" variant="h3">
                  Blog Post Layout
                </Typography>
                <Typography tag="p" variant="body1">
                  Use max-w-lg for optimal reading width. Typically 60-75 characters per line.
                  Perfect for articles, blog posts, and long-form content.
                </Typography>
              </Stack>
            </Card>
          </Container>

          {/* Dashboard */}
          <Container maxWidth="full" padding="lg">
            <Card>
              <Stack direction="vertical" spacing="sm">
                <Typography tag="h3" variant="h3">
                  Dashboard Layout
                </Typography>
                <Typography tag="p" variant="body1">
                  Use max-w-full for dashboards that need all available space. Combine with Grid for
                  multi-column layouts.
                </Typography>
              </Stack>
            </Card>
          </Container>

          {/* Form */}
          <Container maxWidth="md" padding="md" centered>
            <Card>
              <Stack direction="vertical" spacing="sm">
                <Typography tag="h3" variant="h3">
                  Form Layout
                </Typography>
                <Typography tag="p" variant="body1">
                  Use max-w-md for forms. Creates focused, scannable input fields without excessive
                  line length.
                </Typography>
              </Stack>
            </Card>
          </Container>
        </Stack>

        <CodeBlock
          code={`// Blog Post
<Container maxWidth="lg" padding="md" centered>
  <article>...</article>
</Container>

// Dashboard
<Container maxWidth="full" padding="lg">
  <Grid columns={12}>...</Grid>
</Container>

// Form
<Container maxWidth="md" padding="md" centered>
  <form>...</form>
</Container>`}
        />
      </DemoSection>
    </Stack>
  );
};

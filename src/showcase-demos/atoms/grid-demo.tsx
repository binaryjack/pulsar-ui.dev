/**
 * Grid Component Demo
 * Demonstrates CSS Grid layout patterns
 */

import { Grid } from '../../components/atoms/grid';
import { Stack } from '../../components/atoms/stack';
import { Typography } from '../../components/atoms/typography';
import { Card } from '../../components/organisms/card';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const GridDemo = (): HTMLElement => {
  // Helper component for grid items
  const GridItem = ({ number }: { number: number }): HTMLElement => (
    <Card>
      <Typography tag="p" variant="body1" className="text-center">
        {number}
      </Typography>
    </Card>
  );

  return (
    <Stack direction="vertical" spacing="lg">
      {/* Basic Grid Columns */}
      <DemoSection
        title="Column Grid Layouts"
        description="Responsive grid with different column counts"
      >
        <Stack direction="vertical" spacing="md">
          <Typography tag="h4" variant="h4">
            2 Columns
          </Typography>
          <Grid columns={2} gap="md">
            <GridItem number={1} />
            <GridItem number={2} />
            <GridItem number={3} />
            <GridItem number={4} />
          </Grid>

          <Typography tag="h4" variant="h4">
            3 Columns
          </Typography>
          <Grid columns={3} gap="md">
            <GridItem number={1} />
            <GridItem number={2} />
            <GridItem number={3} />
            <GridItem number={4} />
            <GridItem number={5} />
            <GridItem number={6} />
          </Grid>

          <Typography tag="h4" variant="h4">
            4 Columns
          </Typography>
          <Grid columns={4} gap="md">
            <GridItem number={1} />
            <GridItem number={2} />
            <GridItem number={3} />
            <GridItem number={4} />
          </Grid>

          <Typography tag="h4" variant="h4">
            6 Columns
          </Typography>
          <Grid columns={6} gap="sm">
            <GridItem number={1} />
            <GridItem number={2} />
            <GridItem number={3} />
            <GridItem number={4} />
            <GridItem number={5} />
            <GridItem number={6} />
          </Grid>
        </Stack>

        <CodeBlock
          code={`<Grid columns={3} gap="md">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>`}
        />
      </DemoSection>

      {/* Gap Sizes */}
      <DemoSection title="Gap Sizes" description="Different spacing between grid items">
        <Stack direction="vertical" spacing="md">
          <Typography tag="h4" variant="h4">
            Extra Small Gap (gap-1)
          </Typography>
          <Grid columns={4} gap="xs">
            <GridItem number={1} />
            <GridItem number={2} />
            <GridItem number={3} />
            <GridItem number={4} />
          </Grid>

          <Typography tag="h4" variant="h4">
            Small Gap (gap-2)
          </Typography>
          <Grid columns={4} gap="sm">
            <GridItem number={1} />
            <GridItem number={2} />
            <GridItem number={3} />
            <GridItem number={4} />
          </Grid>

          <Typography tag="h4" variant="h4">
            Medium Gap (gap-4)
          </Typography>
          <Grid columns={4} gap="md">
            <GridItem number={1} />
            <GridItem number={2} />
            <GridItem number={3} />
            <GridItem number={4} />
          </Grid>

          <Typography tag="h4" variant="h4">
            Large Gap (gap-6)
          </Typography>
          <Grid columns={4} gap="lg">
            <GridItem number={1} />
            <GridItem number={2} />
            <GridItem number={3} />
            <GridItem number={4} />
          </Grid>

          <Typography tag="h4" variant="h4">
            Extra Large Gap (gap-8)
          </Typography>
          <Grid columns={4} gap="xl">
            <GridItem number={1} />
            <GridItem number={2} />
            <GridItem number={3} />
            <GridItem number={4} />
          </Grid>
        </Stack>

        <CodeBlock
          code={`<Grid columns={4} gap="lg">
  <Card>Well-spaced items</Card>
</Grid>`}
        />
      </DemoSection>

      {/* Custom Template Columns */}
      <DemoSection
        title="Custom Column Templates"
        description="Use templateColumns for complex layouts"
      >
        <Stack direction="vertical" spacing="md">
          <Typography tag="h4" variant="h4">
            Sidebar Layout (1fr 3fr)
          </Typography>
          <Grid templateColumns="1fr 3fr" gap="md">
            <Card>
              <Typography tag="p" variant="body2">
                Sidebar (1fr)
              </Typography>
            </Card>
            <Card>
              <Typography tag="p" variant="body2">
                Main Content (3fr) - Takes 3x the space
              </Typography>
            </Card>
          </Grid>

          <Typography tag="h4" variant="h4">
            Three Column Layout (200px auto 200px)
          </Typography>
          <Grid templateColumns="200px auto 200px" gap="md">
            <Card>
              <Typography tag="p" variant="body2">
                Fixed 200px
              </Typography>
            </Card>
            <Card>
              <Typography tag="p" variant="body2">
                Flexible Center (auto)
              </Typography>
            </Card>
            <Card>
              <Typography tag="p" variant="body2">
                Fixed 200px
              </Typography>
            </Card>
          </Grid>

          <Typography tag="h4" variant="h4">
            Responsive Columns (repeat(auto-fit, minmax(200px, 1fr)))
          </Typography>
          <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="md">
            <GridItem number={1} />
            <GridItem number={2} />
            <GridItem number={3} />
            <GridItem number={4} />
            <GridItem number={5} />
            <GridItem number={6} />
          </Grid>
        </Stack>

        <CodeBlock
          code={`// Sidebar Layout
<Grid templateColumns="1fr 3fr" gap="md">
  <aside>Sidebar</aside>
  <main>Content</main>
</Grid>

// Responsive Grid
<Grid 
  templateColumns="repeat(auto-fit, minmax(200px, 1fr))" 
  gap="md"
>
  {items.map(item => <Card>{item}</Card>)}
</Grid>`}
        />
      </DemoSection>

      {/* Row and Column Gap */}
      <DemoSection
        title="Independent Row & Column Gaps"
        description="Different spacing for rows and columns"
      >
        <Typography tag="h4" variant="h4">
          Row Gap Large, Column Gap Small
        </Typography>
        <Grid columns={3} rowGap="2rem" columnGap="0.5rem">
          <GridItem number={1} />
          <GridItem number={2} />
          <GridItem number={3} />
          <GridItem number={4} />
          <GridItem number={5} />
          <GridItem number={6} />
        </Grid>

        <CodeBlock
          code={`<Grid 
  columns={3} 
  rowGap="2rem" 
  columnGap="0.5rem"
>
  {items.map(item => <Card>{item}</Card>)}
</Grid>`}
        />
      </DemoSection>

      {/* Common Layouts */}
      <DemoSection title="Common Layout Patterns" description="Real-world grid use cases">
        <Stack direction="vertical" spacing="md">
          {/* Dashboard Cards */}
          <Typography tag="h4" variant="h4">
            Dashboard Cards (4 columns, responsive)
          </Typography>
          <Grid columns={4} gap="md">
            <Card>
              <Stack direction="vertical" spacing="xs">
                <Typography tag="p" variant="caption" className="text-neutral-600">
                  Total Users
                </Typography>
                <Typography tag="p" variant="h3">
                  1,234
                </Typography>
              </Stack>
            </Card>
            <Card>
              <Stack direction="vertical" spacing="xs">
                <Typography tag="p" variant="caption" className="text-neutral-600">
                  Revenue
                </Typography>
                <Typography tag="p" variant="h3">
                  $45.2K
                </Typography>
              </Stack>
            </Card>
            <Card>
              <Stack direction="vertical" spacing="xs">
                <Typography tag="p" variant="caption" className="text-neutral-600">
                  Conversions
                </Typography>
                <Typography tag="p" variant="h3">
                  89%
                </Typography>
              </Stack>
            </Card>
            <Card>
              <Stack direction="vertical" spacing="xs">
                <Typography tag="p" variant="caption" className="text-neutral-600">
                  Sessions
                </Typography>
                <Typography tag="p" variant="h3">
                  4,567
                </Typography>
              </Stack>
            </Card>
          </Grid>

          {/* Image Gallery */}
          <Typography tag="h4" variant="h4">
            Image Gallery (Auto-fit responsive)
          </Typography>
          <Grid templateColumns="repeat(auto-fit, minmax(150px, 1fr))" gap="sm">
            <Card>
              <Typography tag="p" variant="body2" className="text-center py-8">
                Image 1
              </Typography>
            </Card>
            <Card>
              <Typography tag="p" variant="body2" className="text-center py-8">
                Image 2
              </Typography>
            </Card>
            <Card>
              <Typography tag="p" variant="body2" className="text-center py-8">
                Image 3
              </Typography>
            </Card>
            <Card>
              <Typography tag="p" variant="body2" className="text-center py-8">
                Image 4
              </Typography>
            </Card>
            <Card>
              <Typography tag="p" variant="body2" className="text-center py-8">
                Image 5
              </Typography>
            </Card>
            <Card>
              <Typography tag="p" variant="body2" className="text-center py-8">
                Image 6
              </Typography>
            </Card>
          </Grid>

          {/* App Layout */}
          <Typography tag="h4" variant="h4">
            Application Layout (Header, Sidebar, Main, Footer)
          </Typography>
          <Grid
            templateColumns="200px 1fr"
            templateRows="auto 1fr auto"
            gap="md"
          >
            <Card>
              <Typography tag="p" variant="body2">
                Header (spans all columns)
              </Typography>
            </Card>
            <Card>
              <Typography tag="p" variant="body2">
                Sidebar
              </Typography>
            </Card>
            <Card>
              <Typography tag="p" variant="body2">
                Main Content Area
              </Typography>
            </Card>
            <Card>
              <Typography tag="p" variant="body2">
                Footer (spans all columns)
              </Typography>
            </Card>
          </Grid>
        </Stack>

        <CodeBlock
          code={`// Dashboard Cards
<Grid columns={4} gap="md">
  <Card>Stat 1</Card>
  <Card>Stat 2</Card>
  <Card>Stat 3</Card>
  <Card>Stat 4</Card>
</Grid>

// Image Gallery
<Grid 
  templateColumns="repeat(auto-fit, minmax(150px, 1fr))" 
  gap="sm"
>
  {images.map(img => <Card>{img}</Card>)}
</Grid>

// App Layout
<Grid 
  templateColumns="200px 1fr" 
  templateRows="auto 1fr auto"
>
  <header>...</header>
  <aside>Sidebar</aside>
  <main>Content</main>
  <footer>...</footer>
</Grid>`}
        />
      </DemoSection>
    </Stack>
  );
};

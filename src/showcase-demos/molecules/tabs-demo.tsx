/**
 * Tabs Component Demo
 */

import { Tabs, TabList, Tab, TabPanels, TabPanel } from '../../components/molecules/tabs';
import { DemoSection } from '../../showcase-components/demo-section';
import { CodeBlock } from '../../showcase-components/code-block';

export const TabsDemo = (): HTMLElement => {
  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Tabs</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Tabbed interface with keyboard navigation and compound pattern.
        </p>
      </div>

      <DemoSection title="Basic Tabs" description="Simple tabbed content">
        <Tabs defaultIndex={0}>
          <TabList>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 class="font-semibold mb-2">First Tab Content</h3>
                <p>This is the content of the first tab.</p>
              </div>
            </TabPanel>
            <TabPanel>
              <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 class="font-semibold mb-2">Second Tab Content</h3>
                <p>This is the content of the second tab.</p>
              </div>
            </TabPanel>
            <TabPanel>
              <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 class="font-semibold mb-2">Third Tab Content</h3>
                <p>This is the content of the third tab.</p>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <CodeBlock
          code={`<Tabs defaultIndex={0}>
  <TabList>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>Content 1</TabPanel>
    <TabPanel>Content 2</TabPanel>
  </TabPanels>
</Tabs>`}
        />
      </DemoSection>

      <DemoSection title="Documentation Example" description="Typical use case for documentation">
        <Tabs defaultIndex={0}>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>API</Tab>
            <Tab>Examples</Tab>
            <Tab>Changelog</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div class="p-4 space-y-2">
                <h3 class="text-lg font-semibold">Overview</h3>
                <p class="text-gray-600 dark:text-gray-400">
                  The Tabs component provides a way to organize content into separate views where
                  only one view is visible at a time.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div class="p-4 space-y-2">
                <h3 class="text-lg font-semibold">API Reference</h3>
                <pre class="text-sm">
                  <code>
                    interface ITabsProps{' '}
                    {`{
  defaultIndex?: number
  children: HTMLElement[]
}`}
                  </code>
                </pre>
              </div>
            </TabPanel>
            <TabPanel>
              <div class="p-4 space-y-2">
                <h3 class="text-lg font-semibold">Examples</h3>
                <p class="text-gray-600 dark:text-gray-400">
                  Check out the code examples above to see how to use the Tabs component.
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div class="p-4 space-y-2">
                <h3 class="text-lg font-semibold">Changelog</h3>
                <ul class="list-disc list-inside text-gray-600 dark:text-gray-400">
                  <li>v1.0.0 - Initial release</li>
                  <li>v1.1.0 - Added keyboard navigation</li>
                  <li>v1.2.0 - Improved accessibility</li>
                </ul>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <CodeBlock
          code={`<Tabs>
  <TabList>
    <Tab>Overview</Tab>
    <Tab>API</Tab>
    <Tab>Examples</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>Overview content...</TabPanel>
    <TabPanel>API documentation...</TabPanel>
    <TabPanel>Code examples...</TabPanel>
  </TabPanels>
</Tabs>`}
        />
      </DemoSection>

      <DemoSection title="Disabled Tabs" description="Some tabs can be disabled">
        <Tabs defaultIndex={0}>
          <TabList>
            <Tab>Active</Tab>
            <Tab disabled>Disabled</Tab>
            <Tab>Active</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p class="p-4">First active tab content</p>
            </TabPanel>
            <TabPanel>
              <p class="p-4">This content won't show</p>
            </TabPanel>
            <TabPanel>
              <p class="p-4">Second active tab content</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <CodeBlock code={`<Tab disabled>Disabled Tab</Tab>`} />
      </DemoSection>
    </div>
  );
};

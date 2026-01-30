/**
 * Tabs Component Demo
 */

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '../../components/molecules/tabs';
import { CodeBlock } from '../../showcase-components/code-block';
import { DemoSection } from '../../showcase-components/demo-section';

export const TabsDemo = (): HTMLElement => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Tabs</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Tabbed interface with keyboard navigation and compound pattern.
        </p>
      </div>

      <DemoSection title="Basic Tabs" description="Simple tabbed content">
        <Tabs defaultIndex={0}>
          <TabList>
            <Tab id="tab-1">Tab 1</Tab>
            <Tab id="tab-2">Tab 2</Tab>
            <Tab id="tab-3">Tab 3</Tab>
          </TabList>
          <TabPanels>
            <TabPanel id="panel-1">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2">First Tab Content</h3>
                <p>This is the content of the first tab.</p>
              </div>
            </TabPanel>
            <TabPanel id="panel-2">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2">Second Tab Content</h3>
                <p>This is the content of the second tab.</p>
              </div>
            </TabPanel>
            <TabPanel id="panel-3">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2">Third Tab Content</h3>
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
            <Tab id="overview">Overview</Tab>
            <Tab id="api">API</Tab>
            <Tab id="examples">Examples</Tab>
            <Tab id="changelog">Changelog</Tab>
          </TabList>
          <TabPanels>
            <TabPanel id="panel-overview">
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">Overview</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The Tabs component provides a way to organize content into separate views where
                  only one view is visible at a time.
                </p>
              </div>
            </TabPanel>
            <TabPanel id="panel-api">
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">API Reference</h3>
                <pre className="text-sm">
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
            <TabPanel id="panel-examples">
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">Examples</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Check out the code examples above to see how to use the Tabs component.
                </p>
              </div>
            </TabPanel>
            <TabPanel id="panel-changelog">
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">Changelog</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
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
            <Tab id="active-1">Active</Tab>
            <Tab id="disabled" disabled>
              Disabled
            </Tab>
            <Tab id="active-2">Active</Tab>
          </TabList>
          <TabPanels>
            <TabPanel id="panel-active-1">
              <p className="p-4">First active tab content</p>
            </TabPanel>
            <TabPanel id="panel-disabled">
              <p className="p-4">This content won't show</p>
            </TabPanel>
            <TabPanel id="panel-active-2">
              <p className="p-4">Second active tab content</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <CodeBlock code={`<Tab disabled>Disabled Tab</Tab>`} />
      </DemoSection>
    </div>
  );
};

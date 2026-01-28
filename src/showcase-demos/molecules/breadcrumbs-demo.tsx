/**
 * Breadcrumbs Component Demo
 */

import { Breadcrumbs, BreadcrumbItem } from '../../../components/molecules/breadcrumbs';
import { DemoSection } from '../../showcase-components/demo-section';
import { CodeBlock } from '../../showcase-components/code-block';

export const BreadcrumbsDemo = (): HTMLElement => {
  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Breadcrumbs</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Navigation trail showing the current page location within a hierarchy.
        </p>
      </div>

      <DemoSection title="Basic Breadcrumbs" description="Simple navigation trail">
        <Breadcrumbs>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/docs">Documentation</BreadcrumbItem>
          <BreadcrumbItem href="/docs/components">Components</BreadcrumbItem>
          <BreadcrumbItem>Breadcrumbs</BreadcrumbItem>
        </Breadcrumbs>
        <CodeBlock
          code={`<Breadcrumbs>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/docs">Documentation</BreadcrumbItem>
  <BreadcrumbItem>Current Page</BreadcrumbItem>
</Breadcrumbs>`}
        />
      </DemoSection>

      <DemoSection title="Custom Separator" description="Use a custom separator between items">
        <Breadcrumbs separator=">">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/products">Products</BreadcrumbItem>
          <BreadcrumbItem>Item Details</BreadcrumbItem>
        </Breadcrumbs>

        <div class="mt-4">
          <Breadcrumbs separator="•">
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/blog">Blog</BreadcrumbItem>
            <BreadcrumbItem>Article</BreadcrumbItem>
          </Breadcrumbs>
        </div>
        <CodeBlock
          code={`<Breadcrumbs separator=">">
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem>Page</BreadcrumbItem>
</Breadcrumbs>`}
        />
      </DemoSection>

      <DemoSection title="Deep Navigation" description="Multiple levels of navigation">
        <Breadcrumbs>
          <BreadcrumbItem href="/">Dashboard</BreadcrumbItem>
          <BreadcrumbItem href="/settings">Settings</BreadcrumbItem>
          <BreadcrumbItem href="/settings/account">Account</BreadcrumbItem>
          <BreadcrumbItem href="/settings/account/profile">Profile</BreadcrumbItem>
          <BreadcrumbItem>Edit</BreadcrumbItem>
        </Breadcrumbs>
        <CodeBlock
          code={`<Breadcrumbs>
  <BreadcrumbItem href="/">Dashboard</BreadcrumbItem>
  <BreadcrumbItem href="/settings">Settings</BreadcrumbItem>
  <BreadcrumbItem href="/settings/account">Account</BreadcrumbItem>
  <BreadcrumbItem>Edit</BreadcrumbItem>
</Breadcrumbs>`}
        />
      </DemoSection>
    </div>
  );
};

/**
 * Menu Component Demo
 */

import { Menu, MenuItem, MenuDivider } from '../../../components/molecules/menu';
import { DemoSection } from '../../showcase-components/demo-section';
import { CodeBlock } from '../../showcase-components/code-block';

export const MenuDemo = (): HTMLElement => {
  return (
    <div class="space-y-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Menu</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Navigation menu with keyboard navigation, icons, and dividers.
        </p>
      </div>

      <DemoSection title="Basic Menu" description="Simple navigation menu">
        <Menu>
          <MenuItem onClick={() => console.log('Dashboard')}>Dashboard</MenuItem>
          <MenuItem onClick={() => console.log('Projects')}>Projects</MenuItem>
          <MenuItem onClick={() => console.log('Team')}>Team</MenuItem>
          <MenuItem onClick={() => console.log('Settings')}>Settings</MenuItem>
        </Menu>
        <CodeBlock
          code={`<Menu>
  <MenuItem onClick={() => navigate('/dashboard')}>
    Dashboard
  </MenuItem>
  <MenuItem onClick={() => navigate('/projects')}>
    Projects
  </MenuItem>
</Menu>`}
        />
      </DemoSection>

      <DemoSection title="With Icons" description="Add icons to menu items">
        <Menu>
          <MenuItem
            icon={
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            }
            onClick={() => console.log('Home')}
          >
            Home
          </MenuItem>
          <MenuItem
            icon={
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            }
            onClick={() => console.log('Analytics')}
          >
            Analytics
          </MenuItem>
          <MenuItem
            icon={
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            }
            onClick={() => console.log('Settings')}
          >
            Settings
          </MenuItem>
        </Menu>
        <CodeBlock
          code={`<Menu>
  <MenuItem icon={<HomeIcon />}>Home</MenuItem>
  <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
</Menu>`}
        />
      </DemoSection>

      <DemoSection title="With Dividers" description="Separate menu sections with dividers">
        <Menu>
          <MenuItem onClick={() => console.log('Profile')}>Profile</MenuItem>
          <MenuItem onClick={() => console.log('Account')}>Account Settings</MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => console.log('Team')}>Team Settings</MenuItem>
          <MenuItem onClick={() => console.log('Billing')}>Billing</MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => console.log('Logout')}>Logout</MenuItem>
        </Menu>
        <CodeBlock
          code={`<Menu>
  <MenuItem>Profile</MenuItem>
  <MenuItem>Settings</MenuItem>
  <MenuDivider />
  <MenuItem>Logout</MenuItem>
</Menu>`}
        />
      </DemoSection>

      <DemoSection title="Disabled Items" description="Disable specific menu items">
        <Menu>
          <MenuItem onClick={() => console.log('Edit')}>Edit</MenuItem>
          <MenuItem onClick={() => console.log('Duplicate')}>Duplicate</MenuItem>
          <MenuItem disabled onClick={() => console.log('Delete')}>
            Delete (No Permission)
          </MenuItem>
        </Menu>
        <CodeBlock code={`<MenuItem disabled>Disabled Item</MenuItem>`} />
      </DemoSection>
    </div>
  );
};

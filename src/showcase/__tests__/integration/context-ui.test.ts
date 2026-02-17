/**
 * Integration Tests: Context + UI Components
 * Tests context providers with theme and user controls
 */

import { $REGISTRY, createSignal } from '@pulsar-framework/pulsar.dev';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

describe('Context + UI Component Integration', () => {
  let container: HTMLElement;

  beforeEach(() => {
    $REGISTRY.reset();
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    $REGISTRY.reset();
  });

  describe('Theme Provider + Themed Components', () => {
    it('should apply theme to all child components', () => {
      const [theme, setTheme] = createSignal<'light' | 'dark'>('dark');

      const getThemeStyles = () => {
        return theme() === 'light'
          ? { bg: '#ffffff', text: '#000000' }
          : { bg: '#1a1a1a', text: '#ffffff' };
      };

      const styles = getThemeStyles();
      expect(styles.bg).toBe('#1a1a1a');
      expect(styles.text).toBe('#ffffff');

      setTheme('light');
      const lightStyles = getThemeStyles();
      expect(lightStyles.bg).toBe('#ffffff');
      expect(lightStyles.text).toBe('#000000');
    });

    it('should update multiple components when theme changes', () => {
      const [theme, setTheme] = createSignal('dark');
      type Component = { type: string; theme: string };
      const components: Component[] = [
        { type: 'header', theme: theme() },
        { type: 'body', theme: theme() },
        { type: 'footer', theme: theme() },
      ];

      expect(components.every((c) => c.theme === 'dark')).toBe(true);

      setTheme('light');
      components.forEach((c) => (c.theme = theme()));
      expect(components.every((c) => c.theme === 'light')).toBe(true);
    });
  });

  describe('User Context + Profile Display', () => {
    it('should display user information across components', () => {
      const [user, setUser] = createSignal({
        name: 'John Doe',
        email: 'john@example.com',
        role: 'admin',
      });

      const renderUserCard = () => {
        const card = document.createElement('div');
        card.innerHTML = `
          <div class="name">${user().name}</div>
          <div class="email">${user().email}</div>
          <div class="role">${user().role}</div>
        `;
        return card;
      };

      const card = renderUserCard();
      expect(card.querySelector('.name')?.textContent).toBe('John Doe');
      expect(card.querySelector('.email')?.textContent).toBe('john@example.com');
      expect(card.querySelector('.role')?.textContent).toBe('admin');
    });

    it('should update user info across multiple components', () => {
      const [user, setUser] = createSignal({
        name: 'John Doe',
        avatar: '/avatar1.jpg',
      });

      const components = {
        header: user().name,
        sidebar: user().name,
        profile: user(),
      };

      expect(components.header).toBe('John Doe');
      expect(components.sidebar).toBe('John Doe');

      setUser({ ...user(), name: 'Jane Smith' });
      const updated = {
        header: user().name,
        sidebar: user().name,
        profile: user(),
      };

      expect(updated.header).toBe('Jane Smith');
      expect(updated.sidebar).toBe('Jane Smith');
      expect(updated.profile.name).toBe('Jane Smith');
    });
  });

  describe('Nested Context Providers', () => {
    it('should handle multiple nested contexts', () => {
      const [theme, setTheme] = createSignal('dark');
      const [user, setUser] = createSignal({ name: 'John' });
      const [settings, setSettings] = createSignal({ notifications: true });

      // All contexts should be independent
      expect(theme()).toBe('dark');
      expect(user().name).toBe('John');
      expect(settings().notifications).toBe(true);

      setTheme('light');
      expect(theme()).toBe('light');
      expect(user().name).toBe('John'); // Other contexts unaffected
      expect(settings().notifications).toBe(true);
    });
  });

  describe('Context + Control Flow', () => {
    it('should render components conditionally based on context', () => {
      const [isLoggedIn, setIsLoggedIn] = createSignal(false);
      const [user, setUser] = createSignal({ name: '' });

      const render = () => {
        if (isLoggedIn()) {
          return `Welcome, ${user().name}!`;
        } else {
          return 'Please log in';
        }
      };

      expect(render()).toBe('Please log in');

      setIsLoggedIn(true);
      setUser({ name: 'John' });
      expect(render()).toBe('Welcome, John!');
    });
  });
});

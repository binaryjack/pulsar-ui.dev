/**
 * Test Setup for Vitest
 * Configures JSDOM environment and test utilities
 */

import { beforeAll, afterEach, vi } from 'vitest';

// Mock console methods to reduce noise
beforeAll(() => {
  global.console = {
    ...console,
    error: vi.fn(),
    warn: vi.fn(),
  };
});

// Cleanup after each test
afterEach(() => {
  document.body.innerHTML = '';
  vi.clearAllMocks();
});

// Setup JSDOM environment
beforeAll(() => {
  // Mock window.location
  delete (window as any).location;
  window.location = {
    pathname: '/',
    search: '',
    href: 'http://localhost:3004/',
    origin: 'http://localhost:3004',
  } as any;
  
  // Mock window.history
  window.history.pushState = vi.fn();
  window.history.replaceState = vi.fn();
});

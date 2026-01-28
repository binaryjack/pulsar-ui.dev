/**
 * ESLint Configuration for Pulsar Projects
 * Enables signal safety rules and best practices
 */

module.exports = {
  extends: ['eslint:recommended'],

  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['pulsar-signal-safety'],

  rules: {
    // ===== CRITICAL SIGNAL SAFETY RULES =====

    /**
     * Prevents passing signal functions instead of values to component props
     *
     * ❌ WRONG: <Header sidebarOpen={sidebarOpen} />
     * ✅ RIGHT: <Header sidebarOpen={sidebarOpen()} />
     */
    'pulsar-signal-safety/no-uncalled-signal-prop': 'error',

    /**
     * Prevents using signal functions in conditions without calling them
     *
     * ❌ WRONG: if (isOpen) { ... }
     * ✅ RIGHT: if (isOpen()) { ... }
     */
    'pulsar-signal-safety/signal-in-condition': 'warn',

    // ===== STANDARD ESLint RULES =====
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'prefer-const': 'error',
  },

  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/explicit-function-return-types': 'off',
      },
    },
  ],

  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  globals: {
    DEV: 'readonly',
    PROD: 'readonly',
  },
};

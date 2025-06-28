import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react'; // Import the react plugin

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintPluginPrettierRecommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      react: react, // Add the react plugin here
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'off',
        { allowConstantExport: true },
      ],
      'sort-imports': 'off', // Keep this off if `import/order` handles sorting
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: 'import', next: 'import' },
      ],

      // --- New rules you requested ---

      // 1. console.log error
      'no-console': ['error', { allow: ['warn', 'error'] }], // Allows console.warn and console.error, but flags console.log as an error. Adjust 'allow' as needed.

      // 2. String in prop value should not have curly brackets
      // This is generally covered by `react/jsx-curly-brace-presence`
      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never' },
      ], // Enforce no curly braces for string literals in props. 'children' can be adjusted if you want curly braces for string children.

      // 3. Order of props should be in alphabetical order
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true, // Puts function props last
          shorthandFirst: false, // You can change this to true if you prefer shorthand props first
          shorthandLast: false, // You can change this to true if you prefer shorthand props last
          ignoreCase: true, // Case-insensitive sorting
          noSortAlphabetically: false,
          reservedFirst: true, // Puts reserved props like `key` and `ref` first
        },
      ],
    },
  },
);

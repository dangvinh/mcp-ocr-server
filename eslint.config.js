// eslint.config.js
import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';
import parser from '@typescript-eslint/parser';
import plugin from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';

export default [
  // Ignore build and dependency folders
  {
    ignores: ['dist', 'node_modules', 'coverage', 'cpp'],
  },

  // JavaScript rules (for config files, scripts, etc.)
  {
    files: ['*.js', '*.cjs', '*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
      // Use ESLint's default parser for JS (no explicit parser needed)
    },
    rules: {
      // Basic recommended rules for JavaScript (subset of what @eslint/js recommended used to provide)
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-var': 'error',
      'prefer-const': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'no-return-await': 'error',
      'require-await': 'error',
    },
  },

  // TypeScript strict rules (applies to all source code)
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
      },
      globals: globals.node,
    },
    plugins: {
      '@typescript-eslint': plugin,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      /* --- Base JS best practices --- */
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-var': 'error',
      'prefer-const': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'no-return-await': 'error',
      'require-await': 'error',

      /* --- TypeScript strict rules --- */
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        { allowExpressions: false, allowTypedFunctionExpressions: false },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', disallowTypeAnnotations: false },
      ],
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/no-confusing-void-expression': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',

      /* --- Import rules --- */
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
          'newlines-between': 'always',
        },
      ],

      /* --- Style & clean code --- */
      'arrow-body-style': ['error', 'as-needed'],
      'object-shorthand': ['error', 'always'],
      'no-multi-spaces': 'error',
      'spaced-comment': ['error', 'always', { markers: ['/'] }],

      /* --- Prettier integration --- */
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          trailingComma: 'all',
          printWidth: 100,
          tabWidth: 2,
          endOfLine: 'auto',
        },
      ],
    },
  },
];

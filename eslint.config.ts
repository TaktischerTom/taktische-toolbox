import angularEslintPlugin from '@angular-eslint/eslint-plugin'
import angularEslintPluginTemplate from '@angular-eslint/eslint-plugin-template'
import angularEslintTemplateParser from '@angular-eslint/template-parser'
import type { ESLint, Linter } from 'eslint'
import * as tailwind from 'eslint-plugin-tailwindcss'
import tseslint from 'typescript-eslint'

export default [
  // TypeScript (base)
  ...(tseslint.configs.recommended.map((c) => ({
    ...c,
    files: ['**/*.ts'],
  })) as Linter.Config[]),

  // Angular TypeScript rules
  {
    name: '@angular-eslint',
    files: ['**/*.ts'],
    plugins: {
      '@angular-eslint': angularEslintPlugin as unknown as ESLint.Plugin,
    },
    rules: {
      ...(angularEslintPlugin.configs.recommended.rules as Linter.RulesRecord),
    },
  },

  // Angular templates (HTML)
  {
    name: '@angular-eslint/template',
    files: ['**/*.html'],
    languageOptions: {
      parser: angularEslintTemplateParser,
    },
    plugins: {
      '@angular-eslint/template':
        angularEslintPluginTemplate as unknown as ESLint.Plugin,
      tailwindcss: tailwind,
    },
    rules: {
      ...(angularEslintPluginTemplate.configs.all.rules as Linter.RulesRecord),

      // Angular template tweaks
      '@angular-eslint/template/i18n': 'off',
      '@angular-eslint/template/attributes-order': 'warn',
      '@angular-eslint/template/prefer-ngsrc': 'warn',
      '@angular-eslint/template/no-call-expression': 'warn',
      '@angular-eslint/template/cyclomatic-complexity': [
        'warn',
        { maxComplexity: 10 },
      ],

      // Tailwind rules
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/enforces-negative-arbitrary-values': 'warn',
      'tailwindcss/enforces-shorthand': 'warn',
      'tailwindcss/migration-from-tailwind-2': 'off',
      'tailwindcss/no-arbitrary-value': 'off',
      'tailwindcss/no-custom-classname': 'error',
      'tailwindcss/no-contradicting-classname': 'error',
      'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
    },
  },
] satisfies Linter.Config[]

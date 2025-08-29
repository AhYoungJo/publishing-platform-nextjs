import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {FlatCompat} from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      'next-env.d.ts',
      '*.config.js',
      '*.config.mjs',
    ],
    rules: {
      // 기본 규칙
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      // 'prefer-const': 'error',
      'no-var': 'error',
      'no-undef': 'error',

      // React 관련 규칙
      'react/prop-types': 'off', // TypeScript 사용시 비활성화
      'react/react-in-jsx-scope': 'off', // Next.js에서는 불필요
      'react/display-name': 'off',

      // TypeScript 관련 규칙
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/prefer-as-const': 'error',

      // Next.js 관련 규칙
      '@next/next/no-img-element': 'warn',
      '@next/next/no-html-link-for-pages': 'error',

      // 코드 스타일은 Prettier가 담당하므로 제거
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
];

export default eslintConfig;

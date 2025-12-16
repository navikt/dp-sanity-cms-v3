import studio from '@sanity/eslint-config-studio'

export default [
  ...studio,
  {
    rules: {
      // Allow explicit any types (useful for Sanity schemas)
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]

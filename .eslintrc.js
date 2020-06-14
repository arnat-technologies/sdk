module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['simple-import-sort', '@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jasmine: true,
    jest: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', 'jsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
    '@typescript-eslint/indent': 'off',
  },
};

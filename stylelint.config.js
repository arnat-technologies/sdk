module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: ['stylelint-config-recommended', 'stylelint-config-styled-components'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'function',
          'if',
          'each',
          'include',
          'mixin',
          'return',
          'error',
          'else',
          'for',
        ],
      },
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements', 'default-namespace'],
        ignoreTypes: ['/ibk-/'],
      },
    ],
  },
};

/* eslint-env node */
module.exports = {
  extends: [ 'eslint:recommended', 'plugin:@typescript-eslint/recommended' ],
  parser: '@typescript-eslint/parser',
  plugins: [ '@typescript-eslint' ],
  root: true,
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single', 
      { allowTemplateLiterals: true }
    ],
    'quote-props': [
      'error',
      'consistent-as-needed'
    ],
    'semi': [
      'error',
      'always'
    ],
    'eqeqeq': [
      'error',
      'smart'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'array-bracket-spacing': [
      'error',
      'always'
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
  },
};
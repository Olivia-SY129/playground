module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['jest'],
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    // 'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'import/extensions': ['off'],
    'no-nested-ternary': ['off'],
  },
};

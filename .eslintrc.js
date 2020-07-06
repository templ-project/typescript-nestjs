// .eslintrc.js

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: ['plugin:mocha/recommended', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['mocha', '@typescript-eslint'],
  root: true,
};

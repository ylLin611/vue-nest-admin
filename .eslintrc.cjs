/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "no-var": "error", // 不允许使用 var
		"no-multiple-empty-lines": ["error", { max: 1 }], // 不允许多个空行
    "vue/multi-word-component-names": "off", // 组件名可以是大写
  }
}

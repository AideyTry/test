// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 关闭禁止使用tab的机制
    "no-tabs": "off",
    // 关闭掉禁止使用tab和空格混合的机制
    "no-mixed-spaces-and-tabs": "off",
    // 缩进关闭
    "indent": "off",
    "eol-last": "off",
    "skipBlankLines": true, // 允许在空行使用空白符
    "ignoreComments": true  // 允许在注释块中使用空白符
  }
}

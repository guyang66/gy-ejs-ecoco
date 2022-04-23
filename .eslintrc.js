module.exports = {
  extends: ['plugin:prettier/recommended'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  plugins: ['babel','ejs'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'no-eval': 'error',
    'max-len': [
      'warn',
      200,
      2,
      {
        // 忽略所有拖尾注释和行内注释
        ignoreComments: true,
      },
    ],
    // 每个缩进级别由 2 个空格组成, 而不是使用 tab
    indent: [
      'error',
      4,
      {
        // switch 语句缩进 2 个空格
        SwitchCase: 1,
      },
    ],
  },
}

module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        curly: 'warn',
        eqeqeq: 'warn',
        camelcase: ['warn', { properties: 'always' }],
        semi: ['warn', 'never'],
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'space-in-brackets': ['error', 'always'],
        'max-len': [
          'warn',
          {
            code: 120,
            tabWidth: 4,
            ignoreUrls: true,
            ignorePattern: /^import\s.+\sfrom\s.+;$/
          }
        ]
      }
    }
  ]
}

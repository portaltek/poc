module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 2018, sourceType: 'module' },
    rules: {},
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
}

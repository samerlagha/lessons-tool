module.export = {
    extends: 'eslint-config-airbnb-base',
    rules: {
        'no-console': 2,
        'import/prefer-defaul-export':0
    },
    env: {
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 10,
        sourceType: 'module'
    }
}
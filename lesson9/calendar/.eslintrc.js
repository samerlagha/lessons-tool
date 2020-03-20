module.export = {
    extends: 'eslint-config-airbnb-base',

    rules: {
        'no-console': 2,
        'import/prefer-default-export':0,
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]

    },
    env: {
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 10,
        sourceType: 'module'
    }
}
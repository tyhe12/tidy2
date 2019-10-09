module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/prettier',
        'plugin:prettier/recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    globals: {
        gtag: 'readonly'
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)'],
            env: {
                jest: true
            }
        }
    ]
}

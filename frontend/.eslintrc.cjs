module.exports = {
    root: true,
    extends: [
        // add more generic rule sets here, such as:
        "eslint:recommended",
        "plugin:svelte/recommended",
    ],
    overrides: [
        {
            files: ["*.svelte"],
            parser: "svelte-eslint-parser",
        },
    ],
    parser: "@babel/eslint-parser",
    parserOptions: {
        requireConfigFile: false,
        sourceType: "module",
        ecmaVersion: 2020,
    },
    env: {
        browser: true,
        es2017: true,
        node: true,
    },
    rules: {
        "yoda": "error",
        eqeqeq: ["warn", "smart"],
        indent: ["error", 4, { "SwitchCase": 1 }],
        quotes: ["error", "double"],
        semi: ["off", "never"],
        "no-multi-spaces": ["error", { ignoreEOLComments: true }],
        "curly": "error",
        "comma-spacing": "error",
        "brace-style": ["error", "1tbs"],
        "no-var": "error",
        "key-spacing": "warn",
        "keyword-spacing": "warn",
        "space-infix-ops": "warn",
        "arrow-spacing": "warn",
        "no-trailing-spaces": "error",
        "space-before-blocks": "warn",
        "no-unused-vars": ["warn", {
            "args": "none",
        }],
        "no-console": "warn",
        "no-extra-boolean-cast": "off",
        "no-multiple-empty-lines": ["warn", { "max": 1, "maxBOF": 0 }],
        "lines-between-class-members": ["warn", "always", { exceptAfterSingleLine: true }],
        "no-unneeded-ternary": "error",
        "no-else-return": ["error", { "allowElseIf": false }],
        "array-bracket-newline": ["error", "consistent"],
        "eol-last": ["error", "always"],
        "prefer-template": "error",
        "template-curly-spacing": ["warn", "never"],
        "comma-dangle": ["warn", "always-multiline"],
    },
};
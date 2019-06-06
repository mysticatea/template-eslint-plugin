"use strict";

module.exports = {
    root: true,
    plugins: [
        "eslint-plugin"
    ],
    extends: [
        "eslint",
        "plugin:eslint-plugin/recommended"
    ],
    rules: {
        "eslint-plugin/consistent-output": "error",
        "eslint-plugin/no-deprecated-context-methods": "error",
        "eslint-plugin/prefer-output-null": "error",
        "eslint-plugin/prefer-placeholders": "error",
        "eslint-plugin/report-message-format": ["error", "[^a-z].*\\.$"],
        "eslint-plugin/require-meta-type": "error",
        "eslint-plugin/test-case-property-ordering": ["error", [
            "filename",
            "code",
            "output",
            "options",
            "parser",
            "parserOptions",
            "globals",
            "env",
            "errors"
        ]],
        "eslint-plugin/test-case-shorthand-strings": "error"
    },
    overrides: [
        {
            files: "scripts/**/*.js",
            rules: {
                "no-console": "off"
            }
        }
    ]
};

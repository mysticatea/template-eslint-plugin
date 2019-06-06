"use strict";

module.exports = {
    meta: {
        docs: {
            description: "An example rule.",
            category: "Stylistic Issues",
            recommended: true,
            url: "https://github.com/mysticatea/eslint-plugin-template/blob/master/docs/rules/example-rule.md"
        },
        fixable: null,
        messages: {
            disallowExample: "'example' identifier is forbidden."
        },
        schema: [],
        type: "suggestion"
    },

    create(context) {
        return {
            "Identifier[name='example']"(node) {
                context.report({
                    node,
                    messageId: "disallowExample"
                });
            }
        };
    }
};

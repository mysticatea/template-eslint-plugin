"use strict";

const fs = require("fs");
const path = require("path");
const { pluginId } = require("./lib/plugin-id");
const ruleId = process.argv[2];

// Require rule ID.
if (!ruleId) {
    console.error("Usage: npm run add-rule <RULE_ID>");
    process.exitCode = 1;
    return;
}

const docPath = path.resolve(__dirname, "../docs/rules", `${ruleId}.md`);
const rulePath = path.resolve(__dirname, "../lib/rules", `${ruleId}.js`);
const testPath = path.resolve(__dirname, "../tests/lib/rules", `${ruleId}.js`);

// Overwrite check.
for (const filePath of [docPath, rulePath, testPath]) {
    if (fs.existsSync(filePath)) {
        console.error("%o has existed already.", path.relative(process.cwd(), filePath));
        process.exitCode = 1;
        return;
    }
}

// Generate files.
fs.writeFileSync(docPath, `# ${pluginId}/${ruleId}
> (TODO: summary)

(TODO: why is this rule useful?)

## Rule Details

(TODO: how does this rule check code?)

## Options

(TODO: what do options exist?)
`);

fs.writeFileSync(rulePath, `"use strict";

module.exports = {
    meta: {
        docs: {
            // TODO: write the rule summary.
            description: "",

            // TODO: choose the rule category.
            category: "Possible Errors",
            category: "Best Practices",
            category: "Stylistic Issues",

            recommended: false,
            url: ""
        },

        fixable: null,
        messages: {},
        schema: [],

        // TODO: choose the rule type.
        type: "problem",
        type: "suggestion",
        type: "layout"
    },

    create(context) {
        const sourceCode = context.getSourceCode();
        return {}
    }
};
`);

fs.writeFileSync(testPath, `"use strict";

const { RuleTester } = require("eslint");
const rule = require("../../../lib/rules/${ruleId}");

new RuleTester().run("${ruleId}", rule, {
    valid: [],
    invalid: []
});
`);

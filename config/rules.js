/* eslint-disable max-lines, no-magic-numbers */

"use strict";

const ERROR = "error";
const WARN = "WARN";
const OFF = "off";

const basicRules = {
    "@typescript-eslint/adjacent-overload-signatures": ERROR,
    "@typescript-eslint/array-type": [ERROR, { default: "array" }],
    "@typescript-eslint/await-thenable": WARN,
    "@typescript-eslint/ban-ts-comment": [ERROR, {
        'ts-expect-error': true,
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': false,
        'minimumDescriptionLength': 10,
    }],
    "@typescript-eslint/ban-tslint-comment": OFF,
    "@typescript-eslint/ban-types": [ERROR, { extendDefaults: true }],
    "@typescript-eslint/class-literal-property-style": [WARN, "fields"], // TODO needs verification in real life
    "@typescript-eslint/consistent-indexed-object-style": [ERROR, "record"],
    "@typescript-eslint/consistent-type-assertions": [ERROR, {
        assertionStyle: "as",
        objectLiteralTypeAssertions:"never",
    }],
    "@typescript-eslint/consistent-type-definitions": [ERROR, "interface"],
    "@typescript-eslint/consistent-type-imports": [ERROR, {
        prefer: "type-imports",
        disallowTypeAnnotations: true,
    }],
    "@typescript-eslint/explicit-function-return-type": [ERROR, {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: false,
        allowConciseArrowFunctionExpressionsStartingWithVoid: false,
    }],
    "@typescript-eslint/explicit-member-accessibility": [ERROR, { accessibility: "explicit" }], // @TODO consider no-public?
    "@typescript-eslint/explicit-module-boundary-types": OFF,
    "@typescript-eslint/member-delimiter-style": [ERROR, {
        multiline: {
            "delimiter": "semi",
            "requireLast": true
        },
        singleline: {
            "delimiter": "semi",
            "requireLast": false
        },
    }],
    "@typescript-eslint/member-ordering": OFF, // @TODO looks useful, but takes a lot of time to configure
    "@typescript-eslint/method-signature-style": [ERROR, "property"],
};

module.exports = {
    rules: {
        ...basicRules,
    },
};

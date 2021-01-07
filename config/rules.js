/* eslint-disable max-lines, @typescript-eslint/no-magic-numbers */

"use strict";

const ERROR = "error";
const WARN = "WARN";
const OFF = "off";

const basicRules = {
    "@typescript-eslint/adjacent-overload-signatures": ERROR,
    "@typescript-eslint/array-type": [ERROR, { default: "array" }],
    "@typescript-eslint/await-thenable": WARN,
    "@typescript-eslint/ban-ts-comment": [ERROR, {
        "ts-expect-error": "allow-with-description",
        "ts-ignore": "allow-with-description",
        "ts-nocheck": "allow-with-description",
        "ts-check": false,
        "minimumDescriptionLength": 10,
    }],
    "@typescript-eslint/ban-tslint-comment": OFF,
    "@typescript-eslint/ban-types": [ERROR, { extendDefaults: true }],
    "@typescript-eslint/class-literal-property-style": [WARN, "fields"], // @TODO needs verification in real life
    "@typescript-eslint/consistent-indexed-object-style": [ERROR, "record"],
    "@typescript-eslint/consistent-type-assertions": [ERROR, {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "never",
    }],
    "@typescript-eslint/consistent-type-definitions": [ERROR, "interface"],
    "@typescript-eslint/consistent-type-imports": [ERROR, {
        prefer: "type-imports",
        disallowTypeAnnotations: true,
    }],
    "@typescript-eslint/explicit-function-return-type": [OFF, {
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
            "requireLast": true,
        },
        singleline: {
            "delimiter": "semi",
            "requireLast": false,
        },
    }],
    "@typescript-eslint/member-ordering": OFF, // @TODO looks useful, but takes a lot of time to configure
    "@typescript-eslint/method-signature-style": [ERROR, "property"],
    "@typescript-eslint/naming-convention": OFF, // @FIXME this is an advanced "camelcase", looks useful
    "@typescript-eslint/no-base-to-string": [ERROR, { ignoredTypeNames: [] }],
    "@typescript-eslint/no-confusing-non-null-assertion": ERROR,
    "@typescript-eslint/no-confusing-void-expression": [ERROR, {
        ignoreArrowShorthand: false,
        ignoreVoidOperator: false,
    }],
    "@typescript-eslint/no-dynamic-delete": ERROR,
    "@typescript-eslint/no-empty-interface": OFF,
    "@typescript-eslint/no-explicit-any": [WARN, {
        fixToUnknown: false,
        ignoreRestArgs: false,
    }],
    "@typescript-eslint/no-extra-non-null-assertion": ERROR,
    "@typescript-eslint/no-extraneous-class": [WARN, {
        allowConstructorOnly: false,
        allowEmpty: false,
        allowStaticOnly: false,
        allowWithDecorator: false,
    }],
    "@typescript-eslint/no-floating-promises": [WARN, {
        ignoreVoid: true,
        ignoreIIFE: false,
    }],
    "@typescript-eslint/no-for-in-array": ERROR,
    "@typescript-eslint/no-implicit-any-catch": [ERROR, {
        allowExplicitAny: false,
    }],
    "@typescript-eslint/no-inferrable-types": [OFF, { // @TODO test later on large code how it behaves
        ignoreParameters: false,
        ignoreProperties: false,
    }],
    "@typescript-eslint/no-invalid-void-type": [WARN, { // @TODO needs verification
        allowInGenericTypeArguments: true,
        allowAsThisParameter: false,
    }],
    "@typescript-eslint/no-misused-new": WARN,
    "@typescript-eslint/no-misused-promises": [ERROR, {
        checksVoidReturn: true,
        checksConditionals: true,
    }],
    "@typescript-eslint/no-namespace": [ERROR, {
        allowDeclarations: false,
        allowDefinitionFiles: true,
    }],
    "@typescript-eslint/no-non-null-asserted-optional-chain": ERROR,
    "@typescript-eslint/no-non-null-assertion": OFF,
    "@typescript-eslint/no-parameter-properties": [ERROR, { allows: undefined }],
    "@typescript-eslint/no-require-imports": WARN,
    "@typescript-eslint/no-this-alias": [OFF, {
        allowDestructuring: true,
        allowedNames: ["self"],
    }],
    "@typescript-eslint/no-type-alias": OFF, // @TODO useful but time consuming to consider everything?
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": OFF,
    "@typescript-eslint/no-unnecessary-condition": [WARN, {
        allowConstantLoopConditions: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
    }],
    "@typescript-eslint/no-unnecessary-qualifier": ERROR, // @TODO verify if useful for enums? actually we probably want the opposite, see prefer-literal-enum-member docs
    "@typescript-eslint/no-unnecessary-type-arguments": WARN, // @TODO to decide
    "@typescript-eslint/no-unnecessary-type-assertion": ERROR,
    "@typescript-eslint/no-unnecessary-type-constraint": ERROR,
    "@typescript-eslint/no-unsafe-assignment": ERROR,
    "@typescript-eslint/no-unsafe-call": ERROR,
    "@typescript-eslint/no-unsafe-member-access": ERROR,
    "@typescript-eslint/no-unsafe-return": ERROR,
    "@typescript-eslint/no-var-requires": ERROR,
    "@typescript-eslint/non-nullable-type-assertion-style": OFF,
    "@typescript-eslint/prefer-as-const": OFF,
    "@typescript-eslint/prefer-enum-initializers": OFF,
    "@typescript-eslint/prefer-for-of": OFF,
    "@typescript-eslint/prefer-function-type": OFF,
    "@typescript-eslint/prefer-includes": WARN,
    "@typescript-eslint/prefer-literal-enum-member": WARN,
    "@typescript-eslint/prefer-namespace-keyword": ERROR, // should not be used in ES2015+ automatically
    "@typescript-eslint/prefer-nullish-coalescing": [ERROR, {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true,
    }],
    "@typescript-eslint/prefer-optional-chain": ERROR,
    "@typescript-eslint/prefer-readonly": [ERROR, {
        onlyInlineLambdas: false,
    }],
    "@typescript-eslint/prefer-readonly-parameter-types": OFF, // no-param-reassign will take care of that
    "@typescript-eslint/prefer-reduce-type-parameter": ERROR,
    "@typescript-eslint/prefer-regexp-exec": WARN,
    "@typescript-eslint/prefer-string-starts-ends-with": ERROR,
    "@typescript-eslint/prefer-ts-expect-error": ERROR,
    "@typescript-eslint/promise-function-async": [WARN, { // @TODO to be verified
        allowAny: true, // @TODO or false?
        allowedPromiseNames: [],
        checkArrowFunctions: true,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true,
    }],
    "@typescript-eslint/require-array-sort-compare": [WARN, {
        ignoreStringArrays: true,
    }],
    "@typescript-eslint/restrict-plus-operands": [ERROR, {
        checkCompoundAssignments: true,
    }],
    "@typescript-eslint/restrict-template-expressions": [ERROR, {
        allowNumber: true,
        allowBoolean: false,
        allowAny: false,
        allowNullish: false,
    }],
    "@typescript-eslint/strict-boolean-expressions": [WARN, { // @TODO to be verified
        allowString: true,
        allowNumber: true,
        allowNullableObject: true,
        allowNullableBoolean: false,
        allowNullableString: false,
        allowNullableNumber: false,
        allowAny: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
    }],
    "@typescript-eslint/switch-exhaustiveness-check": OFF, // not that useful and may be slow
    "@typescript-eslint/triple-slash-reference": [WARN, {
        path: "never",
        types: "never",
        lib: "never",
    }],
    "@typescript-eslint/type-annotation-spacing": ERROR,
    "@typescript-eslint/typedef": WARN, // @TODO just to try, but seems not needed at all
    "@typescript-eslint/unbound-method": [WARN, {
        ignoreStatic: true,
    }],
    "@typescript-eslint/unified-signatures": WARN,
};

const extensionRules = {
    "brace-style": OFF,
    "@typescript-eslint/brace-style": [ERROR, "stroustrup", { allowSingleLine: true }],

    "comma-dangle": OFF,
    "@typescript-eslint/comma-dangle": [ERROR, {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
        enums: "always-multiline",
        generics: "always-multiline",
        tuples: "always-multiline",
    }],

    "comma-spacing": OFF,
    "@typescript-eslint/comma-spacing": [ERROR, {
        before: false,
        after: true,
    }],

    "default-param-last": OFF,
    "@typescript-eslint/default-param-last": ERROR,

    "dot-notation": OFF,
    "@typescript-eslint/dot-notation": [ERROR, {
        allowKeywords: true,
        allowPattern: undefined,
        allowPrivateClassPropertyAccess: false,
        allowProtectedClassPropertyAccess: false,
    }],

    "func-call-spacing": OFF,
    "@typescript-eslint/func-call-spacing": [ERROR, "never"],

    "indent": OFF,
    "@typescript-eslint/indent": [ERROR, 4, {
        SwitchCase: 1,
    }],

    "init-declarations": OFF,
    "@typescript-eslint/init-declarations": OFF, // keep off

    "keyword-spacing": OFF,
    "@typescript-eslint/keyword-spacing": [ERROR, {
        before: true,
        after: true,
    }],

    "lines-between-class-members": OFF,
    "@typescript-eslint/lines-between-class-members": [ERROR, "always", {
        exceptAfterSingleLine: false,
        exceptAfterOverload: true,
    }],

    "no-array-constructor": OFF,
    "@typescript-eslint/no-array-constructor": ERROR,

    "no-dupe-class-members": OFF,
    "@typescript-eslint/no-dupe-class-members": ERROR,

    "no-duplicate-imports": OFF,
    "@typescript-eslint/no-duplicate-imports": [ERROR, {
        includeExports: true,
    }],

    "no-empty-function": OFF,
    "@typescript-eslint/no-empty-function": [ERROR, { allow: [] }], // TODO maybe add private-constructors and protected-constructors?

    "no-extra-parens": OFF,
    "@typescript-eslint/no-extra-parens": OFF, // keep off

    "no-extra-semi": OFF,
    "@typescript-eslint/no-extra-semi": ERROR,

    "no-implied-eval": OFF,
    "@typescript-eslint/no-implied-eval": ERROR,

    "no-invalid-this": OFF,
    "@typescript-eslint/no-invalid-this": [ERROR, { capIsConstructor: true }],

    "no-loop-func": OFF,
    "@typescript-eslint/no-loop-func": ERROR,

    "no-loss-of-precision": OFF,
    "@typescript-eslint/no-loss-of-precision": ERROR,

    "no-magic-numbers": OFF,
    "@typescript-eslint/no-magic-numbers": [ERROR, {
        ignore: [0, 1],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: false,
        enforceConst: false,
        detectObjects: false,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
    }],

    "no-redeclare": OFF,
    "@typescript-eslint/no-redeclare": [ERROR, { builtinGlobals: true, ignoreDeclarationMerge: false }],

    "no-shadow": OFF,
    "@typescript-eslint/no-shadow": [ERROR, {
        builtinGlobals: true,
        hoist: "all",
        ignoreTypeValueShadow: false,
        ignoreFunctionTypeParameterNameValueShadow: false,
    }],

    "no-throw-literal": OFF,
    "@typescript-eslint/no-throw-literal": ERROR,

    "no-unused-expressions": OFF,
    "@typescript-eslint/no-unused-expressions": [ERROR, {
        allowShortCircuit: true,
        allowTernary: false,
        allowTaggedTemplates: false,
    }],

    "no-unused-vars": OFF,
    "@typescript-eslint/no-unused-vars": [ERROR, {
        vars: "all",
        varsIgnorePattern: undefined,
        args: "none",
        argsIgnorePattern: undefined,
        caughtErrors: "all", // can omit `(error)` instead
        caughtErrorsIgnorePattern: undefined,
        ignoreRestSiblings: true,
    }],

    "no-use-before-define": OFF,
    "@typescript-eslint/no-use-before-define": [WARN, {
        functions: true,
        classes: true,
        variables: true,
        enums: true,
        typedefs: true,
        ignoreTypeReferences: false,
    }],

    "no-useless-constructor": OFF,
    "@typescript-eslint/no-useless-constructor": ERROR,

    "quotes": OFF,
    "@typescript-eslint/quotes": [ERROR, "double", {
        avoidEscape: false,
        allowTemplateLiterals: true,
    }],

    "require-await": OFF,
    "@typescript-eslint/require-await": WARN,

    "no-return-await": OFF,
    "@typescript-eslint/return-await": [ERROR, "in-try-catch"],

    "semi": OFF,
    "@typescript-eslint/semi": [ERROR, "always", {
        omitLastInOneLineBlock: false,
    }],

    "space-before-function-paren": OFF,
    "@typescript-eslint/space-before-function-paren": [ERROR, {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
    }],

    "space-infix-ops": OFF,
    "@typescript-eslint/space-infix-ops": [ERROR, {
        int32Hint: false,
    }],
};

module.exports = {
    rules: {
        ...basicRules,
        ...extensionRules,
    },
};

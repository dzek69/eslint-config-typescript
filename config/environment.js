"use strict";

module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
    },
    plugins: [
        "@typescript-eslint/eslint-plugin",
    ],
    globals: {
        Partial: true,
        Readonly: true,
        Record: true,
        Omit: true,
        Exclude: true,
        Extract: true,
        NonNullable: true,
        Parameters: true,
        ConstructorParameters: true,
        ReturnType: true,
        InstanceType: true,
        Required: true,
        ThisParameterType: true,
        OmitThisParameter: true,
        ThisType: true,
        Uppercase: true,
        Lowercase: true,
        Capitalize: true,
        Uncapitalize: true,
    },
};

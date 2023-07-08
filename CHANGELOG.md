All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [UNRELEASED]
(nothing yet)

## [1.1.1] - 2023-07-08
### Changed
- more explicit config for `restrict-plus-operands` (new options)

## [1.1.0] - 2023-04-14
### Added
- `no-duplicate-type-constituents` rule
- `no-import-type-side-effects` rule
- `no-mixed-enums` rule
- `no-unsafe-declaration-merging` rule
- `no-unsafe-enum-comparison` rule
- `key-spacing` rule
- `block-spacing` rule
- `lines-around-comment` rule
### Changed
- `consistent-type-imports` fix style explicitly set
- `restrict-template-expressions` explicit config for never
- `strict-boolean-expressions` explicit config for nullable enum
- `no-new-native-nonconstructor` non-ts rule disabled, not required with TS

## [1.0.2] - 2022-09-28
### Dev
- deps bump, no runtime change
- removed unused docs generator

## [1.0.1] - 2022-07-02
### Fixed
- readme: wrong package name

## [1.0.0] - 2022-07-02
### Added
- `consistent-generic-constructors` rule
- `consistent-type-exports` rule
- `no-duplicate-enum-values` rule
- `no-non-null-asserted-nullish-coalescing` rule
- `no-redundant-type-constituents` rule
- `no-unsafe-argument` rule
- `no-useless-empty-export` rule
- `object-curly-spacing` rule
- `space-before-blocks"` rule
- `no-meaningless-void-operator` disabled rule
- `prefer-return-this-type` disabled rule
- `sort-type-union-intersection-members` disabled rule
- `padding-line-between-statements` disabled rule
- `no-restricted-imports` disabled rule
### Changed
- `member-delimiter-style` explicit configuration of new option `multilineDetection`
- `restrict-plus-operands` explicit configuration of new option `allowAny`
- `restrict-template-expressions` explicit configuration of new option `allowRegExp`
- `unified-signatures` configuration of new option `ignoreDifferentlyNamedParameters`
- `no-magic-numbers` configuration of new option `ignoreTypeIndexes`
- `no-shadow` configuration of new options `ignoreOnInitialization`, `allow`
- `no-throw-literal` configuration of new options `allowThrowingAny`, `allowThrowingUnknown`
- `no-unused-vars` configuration of new option `destructuredArrayIgnorePattern`
- `no-parameter-properties` disabled, replaced with `parameter-properties`

## [0.5.0] - 2022-03-15
### Removed
- `consistent-type-definitions`
- `consistent-indexed-object-style` - both are fixing things that have different meaning, not different syntax only
### Dev
- version bumps for security

## [0.4.0] - 2021-06-30
### Removed
- `valid-jsdoc` because it conflicts with typedoc
### Dev
- `jsdoc` version bump

## [0.3.2] - 2021-05-09
### Changed
- `ban-types` to allow `object` type to be used
### Dev
- `yarn.lock` update to fix some audit messages

## [0.3.1] - 2021-05-09
### Changed
- reverted `consistent-type-definitions`
- changed `consistent-indexed-object-style` from preferring record to preferring index-signature

## [0.3.0] - 2021-05-09
### Changed
- `consistent-type-definitions` rule from preferring interfaces to preferring types

## [0.2.4] - 2021-02-26
### Fixed
- `prefer-nullish-coalescing` turned off

## [0.2.3] - 2021-02-16
### Fixed
- added `Pick` to globals
### Changed
- `promise-function-async` turned off

## [0.2.2] - 2021-01-07
### Changed
- `strict-boolean-expressions` turned off

## [0.2.1] - 2021-01-07
### Changed
- `ban-ts-comment` will allow `ts-expect-error` with description

## [0.2.0] - 2021-01-07
### Added
- TypeScript globals to environment config

## [0.1.2] - 2021-01-06
### Changed
- `dot-notation` `allowKeywords` option
- README examples

## [0.1.1] - 2021-01-04
### Changed
- disabled `explicit-function-return-type` rule

## [0.1.0] - 2020-12-28
### Added
- `naming-convention` rule
- `no-base-to-string` rule
- `no-confusing-non-null-assertion` rule
- `no-confusing-void-expression` rule
- `no-dynamic-delete` rule
- `no-empty-interface` rule
- `no-explicit-any` rule
- `no-extra-non-null-assertion` rule
- `no-extraneous-class` rule
- `no-floating-promises` rule
- `no-for-in-array` rule
- `no-implicit-any-catch` rule
- `no-inferrable-types` rule
- `no-invalid-void-type` rule
- `no-misused-new` rule
- `no-misused-promises` rule
- `no-namespace` rule
- `no-non-null-asserted-optional-chain` rule
- `no-non-null-assertion` rule
- `no-parameter-properties` rule
- `no-require-imports` rule
- `no-this-alias` rule
- `no-type-alias` rule
- `no-unnecessary-boolean-literal-compare` rule
- `no-unnecessary-condition` rule
- `no-unnecessary-qualifier` rule
- `no-unnecessary-type-arguments` rule
- `no-unnecessary-type-assertion` rule
- `no-unnecessary-type-constraint` rule
- `no-unsafe-assignment` rule
- `no-unsafe-call` rule
- `no-unsafe-member-access` rule
- `no-unsafe-return` rule
- `no-var-requires` rule
- `non-nullable-type-assertion-style` rule
- `prefer-as-const` rule
- `prefer-enum-initializers` rule
- `prefer-for-of` rule
- `prefer-function-type` rule
- `prefer-includes` rule
- `prefer-literal-enum-member` rule
- `prefer-namespace-keyword` rule
- `prefer-nullish-coalescing` rule
- `prefer-optional-chain` rule
- `prefer-readonly` rule
- `prefer-readonly-parameter-types` rule
- `prefer-reduce-type-parameter` rule
- `prefer-regexp-exec` rule
- `prefer-string-starts-ends-with` rule
- `prefer-ts-expect-error` rule
- `promise-function-async` rule
- `require-array-sort-compare` rule
- `restrict-plus-operands` rule
- `restrict-template-expressions` rule
- `strict-boolean-expressions` rule
- `switch-exhaustiveness-check` rule
- `triple-slash-reference` rule
- `type-annotation-spacing` rule
- `typedef` rule
- `unbound-method` rule
- `unified-signatures` rule
- `brace-style` rule
- `comma-dangle` rule
- `comma-spacing` rule
- `default-param-last` rule
- `dot-notation` rule
- `func-call-spacing` rule
- `indent` rule
- `init-declarations` rule
- `keyword-spacing` rule
- `lines-between-class-members` rule
- `no-array-constructor` rule
- `no-dupe-class-members` rule
- `no-duplicate-imports` rule
- `no-empty-function` rule
- `no-extra-parens` rule
- `no-extra-semi` rule
- `no-implied-eval` rule
- `no-invalid-this` rule
- `no-loop-func` rule
- `no-loss-of-precision` rule
- `no-magic-numbers` rule
- `no-redeclare` rule
- `no-shadow` rule
- `no-throw-literal` rule
- `no-unused-expressions` rule
- `no-unused-vars` rule
- `no-use-before-define` rule
- `no-useless-constructor` rule
- `quotes` rule
- `require-await` rule
- `return-await` rule
- `semi` rule
- `space-before-function-paren` rule
- `space-infix-ops` rule

## [0.0.2] - 2020-12-07
### Added
- `explicit-member-accessibility` rule
- `explicit-module-boundary-types` rule
- `member-delimiter-style` rule
- `member-ordering` rule
- `method-signature-style` rule

## [0.0.1] - 2020-11-27
### Added
- first version
- `adjacent-overload-signatures` rule
- `array-type` rule
- `await-thenable` rule
- `ban-ts-comment` rule
- `ban-tslint-comment` rule
- `ban-types` rule
- `class-literal-property-style` rule
- `consistent-indexed-object-style` rule
- `consistent-type-assertions` rule
- `consistent-type-definitions` rule
- `consistent-type-imports` rule
- `explicit-function-return-type` rule


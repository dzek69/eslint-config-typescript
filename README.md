# eslint-config-react

This is my preferred Typescript code style linting rules. You'll probably hate them.

## Idea behind these

No tricks, no magic, no useless code, no complicated code. Very opinionated about all these spaces, quotes, parentheses.
A bit of sanity applied, but not too much.

## Installation

Installation steps assumes you've already configured base eslint config, ie: installed
[my base rules](https://github.com/dzek69/eslint-config-base).

```
npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript @dzek69/eslint-config-typescript --save-dev
```

In your `.eslintrc` file add the rules in `extends` array:
```json
{
  "extends": [
    "@dzek69/eslint-config-typescript"
  ]
}
```

It will automatically set parser, define proper plugin and set parserOptions.project to "./tsconfig.json" (please change
if needed).

Then to lint `src` and `test` directories with subdirectories run:
```
npx eslint src test --ext .ts,.tsx,.js,.jsx,.mjs
```

## Test files issues

If eslint complains on your test files being outside of your app source code dir please set some special `.tsconfig`
with proper `include` property set, see [this](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).

## Full config example

```json
{
    "extends": [
        "@dzek69/eslint-config-base",
        "@dzek69/eslint-config-typescript"
    ],
    "env": {
        "node": true
    },
    "parserOptions": {
        "sourceType": "module",
        "project": "./tsconfig.lint.json"
    },
    "ignorePatterns": [],
    "overrides": [
        {
            "files": [
                "src/*.spec.*", "src/**/*.spec.*"
            ],
            "env": {
                "jest": true
            },
            "rules": {
                "func-names": "off",
                "global-require": "off",
                "max-lines": "off",
                "max-lines-per-function": "off",
                "max-statements": "off",
                "@typescript-eslint/no-empty-function": "off",
                "@typescript-eslint/no-magic-numbers": "off",
                "no-unused-labels": "off"
            }
        }
    ]
}
```

## License

MIT

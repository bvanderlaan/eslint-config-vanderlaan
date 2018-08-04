# eslint-config-vanderlaan

This is a linting configuration package for my projects based on the
[JavaScript Style Guide](https://github.com/airbnb/javascript/blob/eslint-config-airbnb-base-v11.1.3/README.md).

I wanted to make sure that all my projects have a consistent style without needed to manually configure each one to the list of rules and plugins I like to use.

## Getting Started

### Default (ES2015)

1. `npm install --save-dev @vanderlaan/eslint-config-vanderlaan`
2. add `"extends": "@vanderlaan/eslint-config-vanderlaan"` to your `.eslintrc.json`

**Note:** This is my base lint configuration and is selected by default. You can also access it explicitly if you so choose via `@vanderlaan/eslint-config-vanderlaan/base`

### Testing

1. `npm install --save-dev @vanderlaan/eslint-config-vanderlaan`
2. add `"extends": "@vanderlaan/eslint-config-vanderlaan/test"` to your `.eslintrc.json`

> **Note**: Testing only adds additional linting for your test suite. It should be used in conjunction with either the default or legacy resets. That means that your root level `.eslintrc.json` file should extend `base` then under your test sub-folder add another `.eslintrc.json` file which extends `@vanderlaan/eslint-config-vanderlaan/test`. ESLint will
look at both `.eslintrc.json` files taking rules from `/test` first then cascading back to what is defined at the root level.

## What about ESLint?

ESLint, and any other required dependencies, will be installed for you by `@vanderlaan/eslint-config-vanderlaan`.

This package defines its dependencies in its `package.json` as actual dependencies vs. peer or dev. This means that when you install this package you'll get its dependencies too.

## But I only want this for Development not Production

If you include `@vanderlaan/eslint-config-vanderlaan` as a devDependence in your `package.json` then it will only be installed when in development mode thus its dependencies `eslint` and `eslint-config-airbnb` will only be installed if in development mode.

That is if your `package.json` looks like this:
```
{
  "name": "myapp",
  "description": "My App",
  "version": "0.1.0",
  "private": true,
  "author": "Me",
  "engines": {
    "node": ">=6.9.1",
    "npm": "~3.10.8"
  },
  "devDependencies": {
    "@vanderlaan/eslint-config-vanderlaan": "^1.0.0"
  }
}
```

And you execute `npm install` then you'll get `@vanderlaan/eslint-config-vanderlaan` and its dependencies `eslint` and `eslint-config-airbnb`. However if you execute `npm install --production` then `@vanderlaan/eslint-config-vanderlaan` won't be installed as its your projects development dependence thus you won't get its dependencies `eslint` or `eslint-config-airbnb`. Furthermore if your `package.json` looks like the above then `shrinkwrap` will not only exclude this package, since its a development dependency, but it will also exclude `eslint` and `eslint-config-airbnb` as they are dependencies of a development dependency.

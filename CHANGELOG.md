# 1.0.0
Initial rule set based off of AirBnB's style guide version 11.1.3
Alterations from AirBnB:
1. Not using babel for Node projects, must use `use strict` pragma.
1. Allow `i++` or `i--` within `for` loops.
1. Allow _unused expressions_ in tests, this is because `expect(x).to.be.undefined` will trigger the error.
1. Allow longer lines (`max-len`) in tests so we can have descriptive `describe` and `it` statements.
1. Add extra `Promise` based rules (`eslint-plugin-promise`@3.8.0):
    * `always-return` - :exclamation:
    * `no-return-wrap` - :exclamation:
    * `param-names` - :exclamation:
    * `catch-or-return` - :exclamation:
    * `no-new-statics` - :exclamation:
    * `no-nesting` - :exclamation:
    * `no-promise-in-callback` - :warning:
    * `no-return-in-finally` - :warning:
    * `valid-params` - :warning:

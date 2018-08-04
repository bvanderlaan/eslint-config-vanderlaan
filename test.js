module.exports = {
  'env': {
    'mocha': true
  },
  'rules': {
    'no-unused-expressions': 'off', // Turn off: work around to make eslint chai friendly; expect(x).to.be.undefined will trigger rule
    // max-len settings copied from Airbnb (https://github.com/airbnb/javascript/blob/74071a809c22fa1104fe5d86bcd1eda949e1d0d9/packages/eslint-config-airbnb-base/rules/style.js)
    // Allow up to 200 characters to allow for longer describe/it titles
    'max-len': ['error', 200, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }]
  }
};

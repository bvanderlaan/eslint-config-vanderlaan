module.exports = {
  'extends': [
    'eslint-config-airbnb-base'
  ],
  "plugins": [
    "promise"
  ],
  'rules': {
    // OVER RIDE AIRBNB ///////////////////////////////////////////////////////
    // As long as it is the end of a for-loop we're ok with unary operators
    'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
    // PROMISE PLUGIN RULES ///////////////////////////////////////////////////
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'error',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'off',
    'promise/avoid-new': 'off',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'warn'
  }
};

module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "globals": {
    "$": true,
    "window": true,
    "console": true
  },
  "extends": "airbnb-base",
  "rules": {
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "no-alert": "off",
    "prefer-destructuring": "off",
    "class-methods-use-this": "off",
    //"camelcase": ["error", {properties: "never"}]
    "camelcase": "off"
  }
}

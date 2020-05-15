module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "globals": {
    "window": true,
    "console": true,
    "e": true,
    "app": true,
    "$": true,
    "d": true
  },
  "extends": "airbnb-base",
  "rules": {
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "no-alert": "off",
    "prefer-const": "off",
    "prefer-destructuring": "off",
    "class-methods-use-this": "off",
    "import/extensions" : "never",
    //"camelcase": ["error", {properties: "never"}]
    "camelcase": "off"
  }
}

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
  "extends": "standard",
  "rules": {
    "semi": ["error", "always"],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "no-alert": "off",
    // "prefer-const": "off",
    // "import/extensions" : "off",
    "prefer-destructuring": "off",
    "class-methods-use-this": "off",
    //"camelcase": ["error", {properties: "never"}]
    "camelcase": "off"
  }
}

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  globals: {
    window: true,
    console: true,
    e: true,
    app: true,
    $: true,
    d: true
  },
  extends: "standard",
  rules: {
    semi: ["error", "always"],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    camelcase: "off",
    indent: ["error", 2],
    "no-console": "warn",
    "no-alert": "warn",
    "prefer-const": "on"
  }
};

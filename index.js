"use strict"

module.exports = {
  "plugins": [
    "stylelint-em-media-query",
    "stylelint-bem-no-element-nesting",
    "stylelint-no-mismatching-module-file",
    "stylelint-no-multiple-top-level-modules"
  ],
  "rules": {
    "tmi/no-multiple-top-level-modules": true,
    "tmi/no-mismatching-module-file": true,
    "tmi/em-media-query": true,
    "tmi/bem-no-element-nesting": true,
    "media-feature-name-blacklist": [
      "max-width", {
        "severity": "warning",
        "message": "Expected 'min-width' query because we build with a mobile-first approach. A 'max-width' query should only be used in very rare occasions.",
      }
    ],
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "declaration-no-important": [true, {
      "severity": "warning",
      "message": "Using !important is often a patch on a larger specificity issue. Only use !important in very rare occasions."
    }],
    "number-leading-zero": "never",
    "number-no-trailing-zeros": true,
    "selector-no-id": true,
    "string-no-newline": true,
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "length-zero-no-unit": true,
    "unit-case": "lower",
    "value-keyword-case": "lower",
    "shorthand-property-no-redundant-values": true,
    "selector-no-qualifying-type": [true, {
      ignore: ["attribute"]
    }],
    "selector-pseudo-element-colon-notation": "double",
    "selector-max-empty-lines": 0,
    "property-case": "lower",
    "property-blacklist": ['font-smoothing', 'text-rendering', 'osx-font-smoothing'],
    "declaration-bang-space-before": "always",
    "declaration-bang-space-after": "never",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-block-trailing-semicolon": "always",
    "declaration-block-no-duplicate-properties": true,
    "declaration-property-value-blacklist": [
      { "/margin/": ["/-/"] },
      {
        "severity": "warning",
        "message": "Using a negative margin to pull an element closer to another can be unreliable and cause browser consistency issues. If possible, consider an alternative approach to position this."
      }
    ],
    "declaration-block-no-shorthand-property-overrides": true,
    "indentation": 2,
    "block-closing-brace-space-before": "always-single-line",
    "block-opening-brace-space-after": "always-single-line",
    "block-closing-brace-newline-before": "always-multi-line",
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-space-before": "always",
    "declaration-block-single-line-max-declarations": 2,
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "at-rule-no-vendor-prefix": true,
    "block-no-empty": true,
    "at-rule-empty-line-before": ["always", {
      except: ["first-nested"],
      ignore: ["after-comment"],
      ignoreAtRules: ["mixin", "import"]
    }],
    "rule-empty-line-before": ["always-multi-line", {
      ignore: ["after-comment"]
    }],
    "rule-empty-line-before": ["always-multi-line", {
      except: ["first-nested"],
      ignore: ["after-comment"]
    }],
    "function-parentheses-space-inside": "never",
    "function-comma-space-after": "always",
    "at-rule-name-space-after": "always",
    "declaration-colon-newline-after": "always-multi-line",
    "declaration-property-unit-blacklist": {
      "font-size": ["px"],
      "border-radius": ["px"],
      "line-height": ["px"],
      "transform": ["px"]
    },
    "max-empty-lines": 1,
    "max-nesting-depth": [1, {
      ignoreAtRules: ["media"]
    }],
    "no-eol-whitespace": true,
    "no-extra-semicolons": true
  }
}

module.exports = {
	extends: [
		'stylelint-config-standard-scss',
	],
	'plugins': [
		'stylelint-order',
	],
	'rules': {
		'block-closing-brace-empty-line-before': 'never',
		'block-closing-brace-newline-after': 'always',
		'block-closing-brace-newline-before': 'always',
		'block-opening-brace-newline-after': 'always',
		'block-opening-brace-newline-before': 'never-single-line',
		'block-opening-brace-space-before': 'always',
		'block-no-empty': true,
		'color-no-invalid-hex': true,
		'color-hex-case': 'lower',
		'comment-no-empty': true,
		'declaration-bang-space-after': 'never',
		'declaration-bang-space-before': 'always',
		'declaration-colon-space-after': 'always',
		'declaration-colon-space-before': 'never',
		'declaration-empty-line-before': 'never',
		'declaration-block-no-duplicate-properties': true,
		'declaration-block-no-redundant-longhand-properties': true,
		'declaration-block-no-shorthand-property-overrides': true,
		'declaration-block-semicolon-newline-after': 'always',
		'declaration-block-semicolon-newline-before': 'never-multi-line',
		'declaration-block-trailing-semicolon': 'always',
		'font-family-no-duplicate-names': true,
		'font-family-no-missing-generic-family-keyword': true,
		'indentation': 'tab',
		'linebreaks': 'unix',
		'no-duplicate-selectors': true,
		'no-eol-whitespace': true,
		'no-extra-semicolons': true,
		'no-invalid-double-slash-comments': true,
		'no-missing-end-of-source-newline': true,
		'number-leading-zero': 'always',
		'number-no-trailing-zeros': true,
		'property-case': 'lower',
		'property-no-vendor-prefix': false,
		'property-no-unknown': true,
		'selector-attribute-brackets-space-inside': 'never',
		'selector-attribute-operator-space-after': 'never',
		'selector-attribute-operator-space-before': 'never',
		'selector-combinator-space-after': 'always',
		'selector-combinator-space-before': 'always',
		'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
		'selector-descendant-combinator-no-non-space': true,
		'selector-max-empty-lines': 0,
		'selector-max-id': 0,
		'selector-list-comma-newline-after': 'always-multi-line',
		'selector-list-comma-newline-before': 'never-multi-line',
		'selector-list-comma-space-after': 'always-single-line',
		'selector-list-comma-space-before': 'never',
		'shorthand-property-no-redundant-values': true,
		'string-quotes': 'single',
		'unit-no-unknown': true,
		'value-keyword-case': 'lower',
		'value-list-comma-space-after': 'always-single-line',
		'value-list-comma-space-before': 'never',
		'value-list-max-empty-lines': 0,
		'order/properties-alphabetical-order': true,
	},
};

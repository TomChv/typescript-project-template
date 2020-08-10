/**
 * @description Config codingRules
 * A simple eslint file based on airbnb rules
 * Find all rules here https://eslint.org/docs/rules/
 */

module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		project: './tsconfig.json',
		sourceType: "module"
	},
	env: {
		node: true,
	},
	extends: [
		'airbnb-typescript/base',
		'plugin:@typescript-eslint/recommended',
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended"
	],
	rules: {
		// Add new rules here
	}
}

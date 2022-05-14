module.exports = {
	root: true,
	extends: ['plugin:import/recommended', 'plugin:import/typescript'],
	plugins: ['unused-imports'],
	rules: {
		/* eslint-plugin-unused-imports 규칙 (for auto-fixing unused imports) */
		'unused-imports/no-unused-imports': 'warn',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],

		'import/no-named-as-default-member': 'off',

		/* https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md 참고 */
		'import/order': [
			'warn',
			{
				'groups': [
					'builtin',
					'external',
					'internal',
					['parent', 'sibling', 'index'],
				],
				'pathGroups': [
					{
						pattern: 'react*',
						group: 'external',
						position: 'before',
					},
				],
				'pathGroupsExcludedImportTypes': ['react*'],
				'alphabetize': {
					order: 'asc',
					caseInsensitive: true,
				},
				'newlines-between': 'never',
			},
		],

		'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
		'sort-imports': ['warn', { ignoreDeclarationSort: true }],
	},
	settings: {
		'import/resolver': { typescript: {} },
	},
}

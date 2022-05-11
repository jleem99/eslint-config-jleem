module.exports = {
	root: true,
	extends: [
		/* ES6 import 린팅 관련 설정 */
		'plugin:import/recommended',
		'plugin:import/typescript',
	],
	plugins: ['unused-imports'],
	rules: {
		/* eslint-plugin-unused-imports 규칙 (for auto-fixing unused imports) */
		'unused-imports/no-unused-imports': 1,
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],

		'import/no-named-as-default-member': 0,

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
		'sort-imports': [1, { ignoreDeclarationSort: true }],
	},
	settings: {
		'import/resolver': { typescript: {} },
	},
}

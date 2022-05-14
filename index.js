const fs = require('fs')
const path = require('path')

const tsConfig = fs.existsSync('tsconfig.json')
	? path.resolve('tsconfig.json')
	: fs.existsSync('types/tsconfig.json')
	? path.resolve('types/tsconfig.json')
	: undefined

module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		/* 조금 더 정교한 린팅을 위해 type-checking을 요구하는 설정을 추가, 대신 parserOptions.project를 설정해주어야 함 */
		'plugin:@typescript-eslint/recommended-requiring-type-checking',

		/* prettier integration 설정 */
		'plugin:prettier/recommended',
		'./rules/import.js',
	],
	plugins: ['deprecation'],
	ignorePatterns: ['*.js', '*.jsx'],
	rules: {
		/** Warn deprecated code usage */
		'deprecation/deprecation': 'warn',

		/* other rules */
		'no-void': 0,
		'yoda': ['warn', 'never', { exceptRange: true }],
	},
	overrides: [
		{
			files: ['**/*.ts?(x)'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaFeatures: { jsx: true },
				ecmaVersion: 13,
				sourceType: 'module',
				project: tsConfig,
				tsconfigRootDir: __dirname,
			},
			rules: {
				'no-undef': 'off',

				'@typescript-eslint/explicit-module-boundary-types': 0,
				'@typescript-eslint/no-explicit-any': 0,
				'@typescript-eslint/unbound-method': 0, // auto-bind fixes this issue
				'@typescript-eslint/require-await': 0,
				'@typescript-eslint/no-empty-function': 1,
				'@typescript-eslint/no-empty-interface': 1,
				'@typescript-eslint/no-non-null-assertion': 0, // Non-Null이 확실할 때만 사용
				'@typescript-eslint/no-inferrable-types': [
					'warn',
					{ ignoreProperties: true, ignoreParameters: true },
				],

				'no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': [
					'error',
					{
						args: 'after-used',
						argsIgnorePattern: '^_',
						ignoreRestSiblings: true,
						varsIgnorePattern: '^ignored',
					},
				],

				/* Fix enum's no-shadow false positive */
				'no-shadow': 0,
				'@typescript-eslint/no-shadow': 2,

				'@typescript-eslint/no-misused-promises': [
					'warn',
					{ checksVoidReturn: false },
				],
			},
		},
	],
}

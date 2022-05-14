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
		'no-void': 'off',
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

				'@typescript-eslint/explicit-module-boundary-types': 'off',
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/unbound-method': 'off', // auto-bind fixes this issue
				'@typescript-eslint/require-await': 'off',
				'@typescript-eslint/no-empty-function': 'warn',
				'@typescript-eslint/no-empty-interface': 'warn',
				'@typescript-eslint/no-non-null-assertion': 'off', // Non-Null이 확실할 때만 사용
				'@typescript-eslint/no-inferrable-types': [
					'warn',
					{ ignoreProperties: true, ignoreParameters: true },
				],

				'no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': [
					'warn',
					{
						args: 'after-used',
						argsIgnorePattern: '^_',
						ignoreRestSiblings: true,
						varsIgnorePattern: '^ignored',
					},
				],

				/* Fix enum's no-shadow false positive */
				'no-shadow': 'off',
				'@typescript-eslint/no-shadow': 'error',

				'@typescript-eslint/no-misused-promises': [
					'warn',
					{ checksVoidReturn: false },
				],
			},
		},
	],
}

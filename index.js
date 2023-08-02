module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'./shared/typescript.js',
		'plugin:prettier/recommended', // prettier integration 설정
		'./shared/import.js',
	],
	// plugins: ['deprecation'],
	ignorePatterns: ['*.js', '*.jsx'],
	rules: {
		/** Warn deprecated code usage */
		// 'deprecation/deprecation': 'warn',

		/* other rules */
		'no-void': 'off',
		'yoda': ['warn', 'never', { exceptRange: true }],
	},
}

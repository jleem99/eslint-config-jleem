module.exports = {
	extends: [
		'./index.js',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime', // React 17의 JSX Transformation 사용
		'plugin:react-hooks/recommended',
	],
	parserOptions: {
		ecmaFeatures: { jsx: true },
	},
	rules: {
		'react/jsx-uses-vars': 'error',
		// 'react/jsx-uses-react': 'off',
		// 'react/react-in-jsx-scope': 'off',
		'react/no-unescaped-entities': 'off',
		'react/jsx-curly-brace-presence': 'warn',
	},
	settings: {
		react: { version: 'detect' },
	},
}

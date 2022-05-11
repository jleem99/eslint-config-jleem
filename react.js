module.exports = {
	extends: [
		'./rules/index.js',

		/* 리액트 관련 설정 */
		'plugin:react/recommended',
		'plugin:react/jsx-runtime', // React 17의 JSX Transformation 지원
		'plugin:react-hooks/recommended',
	],
	rules: {
		'react/jsx-uses-vars': 2,
		// 'react/jsx-uses-react': 'off',
		// 'react/react-in-jsx-scope': 'off',
		'react/no-unescaped-entities': 0,
	},
}

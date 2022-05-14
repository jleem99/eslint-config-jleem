module.exports = {
	extends: [
		'./react.js',
		'@react-native-community',

		/**
		 * @react-native-community 규칙이 ./index.js 규칙 일부를
		 * 오버라이딩하기 때문에 재정의 필요
		 */
		'./index.js',
	],
	plugins: ['react-native'],
	rules: {
		/** react-native에서는 jsx-runtime 미사용 */
		'react/jsx-uses-react': 'error',

		/** eslint-plugin-react-native 규칙 */
		'react-native/no-unused-styles': 'error',
		'react-native/no-inline-styles': 'error',
		'react-native/no-raw-text': 'off',
		// 'react-native/no-color-literals': 'error',
		// "react-native/sort-styles": 'error',
		// "react-native/split-platform-components": 'error',
		// "react-native/no-single-element-style-arrays": 'error',
	},
	settings: {
		'import/ignore': ['react-native'],
		'react-native/style-sheet-object-names': ['StyleSheet', 'S'],
	},
}

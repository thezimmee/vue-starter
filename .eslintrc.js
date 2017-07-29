// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	extends: 'eslint:recommended',
	env: {
		browser: true,
	},
	plugins: [
		'html' // Required to lint *.vue files.
	],
	// Add custom rules here.
	rules: {
		// Require semicolons.
		semi: ['warn', 'always'],
		// Disallow multiple spaces.
		'no-multi-spaces': ['warn', {ignoreEOLComments: true}],
		// No trailing spaces.
		'no-trailing-spaces': ['warn'],
		// Allow debugger during development.
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
	}
};

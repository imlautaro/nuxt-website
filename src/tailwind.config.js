const colors = require('tailwindcss/colors')

module.exports = {
	purge: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: colors.indigo,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}

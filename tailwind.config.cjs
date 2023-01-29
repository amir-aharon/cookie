// tailwind.config.cjs
const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./src/**/*.svelte', './src/**/*.css'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				lightBlue: colors.cyan,
				gray: {
					900: '#202225',
					800: '#2f3136',
					700: '#36393f',
					600: '#4f545c',
					400: '#d4d7dc',
					300: '#e3e5e8',
					200: '#ebedef',
					100: '#f2f3f5'
				}
			},
			fontFamily: {
				poppins: ['Poppins']
			}
		}
	},
	variants: {
		extend: {
			inset: ['active'],
			spacing: {
				128: '32rem',
				144: '36rem'
			},
			borderRadius: {
				'4xl': '2rem'
			}
		}
	},
	plugins: []
};

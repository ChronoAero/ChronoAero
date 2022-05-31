module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#1a1b26',
				secondary: '#16161e',
				subcontrast: '#6183bb',
				contrast: '#0db9d7',
				symbols: '#b04f15',
			},
			fontFamily: {
				sans: ['Rubik'],
			},
		},
	},
	plugins: [],
};

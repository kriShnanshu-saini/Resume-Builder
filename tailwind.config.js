/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#555',
				light: '#999',
				dark: '#222',
				bgPrimary: '#f1f1f1',
			},
		},
	},
	plugins: [],
};

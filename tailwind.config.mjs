/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}','.\pages\index.astro',
    './components/**/*.{html,js}',],
	
	theme: {
		extend: {},
	},
	plugins: [],
}

module.exports = {
	darkMode: 'class',
}
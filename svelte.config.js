import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'$routes': './src/routes',
			'$routes/*': './src/routes/*',
		},
	},
	preprocess: vitePreprocess()
};

export default config;

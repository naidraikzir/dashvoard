import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		Icons({ compiler: 'svelte' })
	],
	define: {
		APP_NAME: JSON.stringify(process.env.npm_package_name)
	}
};

export default config;

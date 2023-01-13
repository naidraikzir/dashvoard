import type { LayoutServerLoad } from './$types'

const exclude = ['notifications']

export const load: LayoutServerLoad = async ({ locals }) => {
	const modules = import.meta.glob('./**/+page.svelte')
	const routes = new Set(
		Object.keys(modules)
			.map((module) => module.split('/'))
			.filter((module) => module.length > 2)
			.map((module) => module[1])
			.filter((module) => !exclude.includes(module))
	)

	return {
		routes: [...routes],
		sidebar: locals.sidebar
	}
}

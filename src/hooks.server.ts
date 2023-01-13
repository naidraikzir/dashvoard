import type { Handle } from '@sveltejs/kit'

export const handle = (async ({ event, resolve }) => {
	event.locals.sidebar = parseInt(event.cookies.get('width') || '0') < 1024
		? 'false'
		: event.cookies.get('sidebar') || 'false'

	const response = await resolve(event)
	return response
}) satisfies Handle

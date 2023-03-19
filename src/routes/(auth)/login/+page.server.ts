import { fail, redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

export const prerender = false

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData()
		const username = data.get('username')
		const password = data.get('password')

		if (username !== 'Username' || password !== 'Password') {
			return fail(400, { error: 'Invalid credentials' })
		}

		throw redirect(303, '/')
	}
}

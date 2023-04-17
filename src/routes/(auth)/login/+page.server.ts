import { fail, redirect } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms/server'
import { z } from 'zod'

export const prerender = false

const loginSchema = z.object({
	username: z.string().refine((u) => u === 'Username', { message: 'Username is wrong' }),
	password: z.string().refine((u) => u === 'Password', { message: 'Password is wrong' })
})

export const load = async (event) => {
	const form = await superValidate(event, loginSchema)
	return { form }
}

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, loginSchema)

		if (!form.valid) {
			return fail(400, { form })
		} else {
			throw redirect(303, '/')
		}
	}
}

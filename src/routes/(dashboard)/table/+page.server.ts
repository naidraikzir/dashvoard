import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ fetch }) => {
	const products = async () => {
		const data = await fetch('https://dummyjson.com/products?limit=100')
		return data.json()
	}

	return {
		products: products()
	}
}

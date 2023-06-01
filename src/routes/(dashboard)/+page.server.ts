export const load = async ({ fetch }) => {
	async function fetchQuote() {
		const res = await fetch('https://api.quotable.io/quotes/random')
		const quotes = await res.json()
		return quotes[0]
	}

	return {
		quote: fetchQuote()
	}
}

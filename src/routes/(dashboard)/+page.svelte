<script lang="ts">
	import { Card } from 'flowbite-svelte'
	import Weather from '$lib/components/Weather.svelte'
	import Quote from '$lib/components/Quote.svelte'

	export let data
	const { quote } = data
</script>

<div class="grid lg:grid-cols-12 gap-4">
	<Card class="!max-w-none flex items-center justify-center lg:col-span-3">
		<Weather />
	</Card>

	<Card class="!max-w-none flex items-center justify-center lg:col-span-4">
		<Quote {quote} />
	</Card>
</div>

<script lang="ts">
	import IconoirArrowUp from '~icons/iconoir/arrow-up'
	import { Button } from 'flowbite-svelte'

	export let root: HTMLElement
	export let threshold = 640
	let visible = false

	function scrollToTop() {
		root.scrollTo({ top: 0, behavior: 'smooth' })
	}

	$: css = visible ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-10'
	$: if (root) {
		root.addEventListener('scroll', () => {
			visible = root.scrollTop > threshold
		})
	}
</script>

<Button
	class="fixed bottom-4 right-4 !p-2 shadow-md transition-all {css}"
	color="light"
	size="xl"
	on:click={scrollToTop}
>
	<IconoirArrowUp />
</Button>

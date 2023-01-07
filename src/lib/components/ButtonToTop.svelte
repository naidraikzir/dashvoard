<script lang="ts">
	import IconoirArrowUp from '~icons/iconoir/arrow-up'
	import { Button } from 'flowbite-svelte'

	export let visible = false

	$: css = visible ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-10'
</script>

<Button class="fixed bottom-4 right-4 !p-2 transition-all {css}" color="light" size="xl" on:click>
	<IconoirArrowUp />
</Button>

<script lang="ts">
	import IconArrowLeft from '~icons/iconoir/nav-arrow-left'
	import IconArrowRight from '~icons/iconoir/nav-arrow-right'
	import { shown } from '$lib/stores/sidebar'
	import { clickOutside } from '$lib/directives/clickOutside'
	import Menu from './Menu.svelte'
	import Themer from './Themer.svelte'

	function toggle(value: boolean) {
		return () => ($shown = value)
	}

	function onOutsideClick() {
		if (window.innerWidth < 1024) toggle(false)()
	}

	$: Icon = $shown ? IconArrowLeft : IconArrowRight
</script>

<div
	class="fixed flex flex-col w-72 inset-y-0 left-0 transition-transform bg-white dark:bg-black dark:text-white z-10"
	class:-translate-x-full={!$shown}
	class:translate-0={$shown}
	use:clickOutside={onOutsideClick}
>
	<button
		class="absolute top-0 left-full w-12 h-12 flex items-center justify-center text-2xl bg-white dark:bg-black dark:text-white focus:bg-neutral-200 dark:focus:bg-neutral-900"
		aria-label="sidebar toggle"
		on:click|stopPropagation={toggle(!$shown)}
	>
		<svelte:component this={Icon} />
	</button>

	<div class="flex-1 mt-12 overflow-y-auto">
		<Menu on:click={onOutsideClick} />
	</div>

	<div>
		<Themer />
	</div>
</div>

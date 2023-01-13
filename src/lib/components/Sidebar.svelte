<script lang="ts">
	import IconoirNavArrowLeft from '~icons/iconoir/nav-arrow-left'
	import IconoirNavArrowRight from '~icons/iconoir/nav-arrow-right'
	import { sidebarShown } from '$lib/stores/sidebar'
	import { clickOutside } from '$lib/directives/clickOutside'
	import Menu from './Menu.svelte'

	function toggle(value: boolean) {
		return () => ($sidebarShown = value)
	}

	function onOutsideClick() {
		if (window.innerWidth < 1024) toggle(false)()
	}

	$: Icon = $sidebarShown ? IconoirNavArrowLeft : IconoirNavArrowRight
</script>

<div
	class="fixed flex flex-col w-64 inset-y-0 left-0 transition-transform bg-gray-50 dark:bg-gray-800 z-10"
	class:-translate-x-full={!$sidebarShown}
	class:translate-0={$sidebarShown}
	use:clickOutside={onOutsideClick}
>
	<button
		class="absolute top-0 left-full w-12 h-12 flex items-center justify-center text-xl bg-white dark:bg-gray-900 focus:bg-gray-200 dark:focus:bg-gray-800"
		aria-label="sidebar toggle"
		on:click|stopPropagation={toggle(!$sidebarShown)}
	>
		<svelte:component this={Icon} />
	</button>

	<div class="flex-1 mt-12 overflow-y-auto">
		<Menu on:click={onOutsideClick} />
	</div>
</div>

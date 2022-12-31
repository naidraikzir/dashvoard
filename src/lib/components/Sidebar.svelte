<script lang="ts">
	import IconArrowLeft from '~icons/iconoir/arrow-left'
	import IconArrowRight from '~icons/iconoir/arrow-right'
	import { shown } from '$lib/stores/sidebar'
	import { clickOutside } from '$lib/directives/clickOutside'
	import Menu from './Menu.svelte'

	function toggle(value: boolean) {
		return () => ($shown = value)
	}

	function onOutsideClick() {
		if (window.innerWidth < 1024) toggle(false)()
	}

	$: Icon = $shown ? IconArrowLeft : IconArrowRight
</script>

<div
	class="fixed w-72 inset-y-0 left-0 transition bg-white z-10"
	class:-translate-x-full={!$shown}
	class:translate-0={$shown}
	use:clickOutside={onOutsideClick}
>
	<button
		class="absolute top-0 left-full bg-white w-10 h-10 flex items-center justify-center text-2xl"
		on:click|stopPropagation={toggle(!$shown)}
	>
		<svelte:component this={Icon} />
	</button>

	<div class="h-full pt-10 overflow-y-auto">
		<Menu />
	</div>
</div>

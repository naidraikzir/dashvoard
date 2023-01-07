<script lang="ts">
	import '$lib/app.postcss'
	import ButtonToTop from '$lib/components/ButtonToTop.svelte'
	import Header from '$lib/components/Header.svelte'
	import Meta from '$lib/components/Meta.svelte'
	import Sidebar from '$lib/components/Sidebar.svelte'
	import { routes } from '$lib/stores/routes'
	import { shown as sidebarShown } from '$lib/stores/sidebar'
	import type { LayoutData } from './$types'

	export let data: LayoutData
	$routes = data.routes

	let root: HTMLElement
	let scrolled = false

	function setScrolled() {
		scrolled = root.scrollTop > 720
	}

	function scrollToTop() {
		root.scrollTo({ top: 0, behavior: 'smooth' })
	}
</script>

<Meta />

<div
	class="h-full bg-white dark:bg-gray-900 dark:text-white overflow-x-hidden overflow-y-auto transition-none"
	bind:this={root}
	on:scroll={setScrolled}
>
	<Header />
	<Sidebar />

	<div
		class="mt-12 duration-150"
		class:lg:ml-64={$sidebarShown}
		style="transition-property: margin;"
	>
		<div class="container mx-auto p-4">
			<slot />
		</div>
	</div>

	<ButtonToTop visible={scrolled} on:click={scrollToTop} />
</div>

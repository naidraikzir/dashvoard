<script lang="ts">
	import ButtonToTop from '$lib/components/ButtonToTop.svelte'
	import Header from '$lib/components/Header.svelte'
	import Sidebar from '$lib/components/Sidebar.svelte'
	import { routes } from '$lib/stores/routes'
	import { sidebarShown, initializeSidebar } from '$lib/stores/sidebar'
	import type { LayoutData } from './$types'

	export let data: LayoutData
	$routes = data.routes
	initializeSidebar(data.sidebar)

	let root: HTMLElement
</script>

<div
	class="h-full bg-white dark:bg-gray-900 dark:text-white overflow-x-hidden overflow-y-auto transition-none"
	bind:this={root}
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

	<ButtonToTop {root} />
</div>

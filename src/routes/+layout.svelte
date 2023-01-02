<script lang="ts">
	import '$lib/app.postcss'
	import Header from '$lib/components/Header.svelte'
	import Meta from '$lib/components/Meta.svelte'
	import Sidebar from '$lib/components/Sidebar.svelte'
	import { routes } from '$lib/stores/routes'
	import { shown as sidebarShown } from '$lib/stores/sidebar'
	import type { LayoutData } from './$types'

	export let data: LayoutData
	$routes = data.routes
</script>

<Meta />

<div class="h-full bg-gray-100 overflow-x-hidden overflow-y-auto">
	<Header />
	<Sidebar />

	<div
		class="container mx-auto mt-10 p-4 transition-all will-change-auto"
		class:lg:ml-72={$sidebarShown}
	>
		<slot />
	</div>
</div>

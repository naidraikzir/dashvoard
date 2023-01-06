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

<div
	class="h-full bg-white dark:bg-gray-900 dark:text-white overflow-x-hidden overflow-y-auto transition-none"
>
	<Header />
	<Sidebar />

	<div
		class="mt-12 duration-150"
		class:lg:ml-72={$sidebarShown}
		style="transition-property: margin;"
	>
		<div class="container mx-auto p-4">
			<slot />
		</div>
	</div>
</div>

<script lang="ts">
	import '$lib/app.postcss'
	import Header from '$lib/components/Header.svelte'
	import Sidebar from '$lib/components/Sidebar.svelte'
	import { shown as sidebarShown } from '$lib/stores/sidebar'
</script>

<div class="h-full bg-gray-100 overflow-x-hidden overflow-y-auto">
	<Header />
	<Sidebar />

	<div class="container mx-auto mt-10 py-4 transition" class:lg:ml-80={$sidebarShown}>
		<slot />
	</div>
</div>

<script lang="ts">
	import { page } from '$app/stores'
	import { shown as sidebarShown } from '$lib/stores/sidebar'
	import titleify from '$lib/utils/titleify'

	$: route = $page?.route?.id?.split('/').filter((part) => !!part)
	$: title = route?.length ? titleify(route[route.length - 1], '-') : 'Dashboard'
</script>

<div
	class="fixed inset-x-0 top-0 h-12 flex items-center bg-white dark:bg-black dark:text-white pl-12 duration-150"
	class:lg:ml-72={$sidebarShown}
	style="transition-property: margin;"
>
	<div class="text-lg px-4">{title}</div>
</div>

<script lang="ts">
	import { page } from '$app/stores'
	import { shown as sidebarShown } from '$lib/stores/sidebar'
	import titleify from '$lib/utils/titleify'
	import ProfileMenu from './ProfileMenu.svelte'
	import Themer from './Themer.svelte'

	$: route = $page?.route?.id?.split('/').filter((part) => !!part)
	$: title = route?.length ? titleify(route[route.length - 1], '-') : 'Dashboard'
</script>

<div
	class="fixed inset-x-0 top-0 h-12 flex items-center bg-white dark:bg-gray-900 pl-12 duration-150 z-10"
	class:lg:ml-72={$sidebarShown}
	style="transition-property: margin;"
>
	<div class="flex-1 text-lg px-4 whitespace-nowrap overflow-hidden">{title}</div>

	<Themer />
	<ProfileMenu />
</div>

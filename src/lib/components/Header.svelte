<script lang="ts">
	import IconoirBell from '~icons/iconoir/bell'
	import { page } from '$app/stores'
	import { sidebarShown } from '$lib/stores/sidebar'
	import titleify from '$lib/utils/titleify'
	import ProfileMenu from './ProfileMenu.svelte'
	import Themer from './Themer.svelte'

	$: route = $page?.url.pathname.split('/').filter((part) => !!part)
	$: title = route?.length ? titleify(route[route.length - 1], '-') : 'Dashboard'
</script>

<div
	class="fixed inset-x-0 top-0 h-12 flex items-center bg-white dark:bg-gray-900 pl-12 duration-150 z-10"
	class:lg:ml-64={$sidebarShown}
	style="transition-property: margin;"
>
	<div class="flex-1 text-lg px-4 whitespace-nowrap overflow-hidden">{title}</div>

	<Themer />

	<a
		class="w-12 h-12 flex items-center justify-center text-xl focus:bg-gray-200 dark:focus:bg-gray-800"
		href="/notifications"
		title="link to notifications"
	>
		<IconoirBell />
	</a>

	<ProfileMenu />
</div>

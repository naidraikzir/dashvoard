<script lang="ts">
	import IconoirUserCircleAlt from '~icons/iconoir/user-circle-alt'
	import { page } from '$app/stores'
	import { shown as sidebarShown } from '$lib/stores/sidebar'
	import titleify from '$lib/utils/titleify'
	import { Dropdown, DropdownItem } from 'flowbite-svelte'

	export let username = 'User Name Long'

	$: route = $page?.route?.id?.split('/').filter((part) => !!part)
	$: title = route?.length ? titleify(route[route.length - 1], '-') : 'Dashboard'
</script>

<div
	class="fixed inset-x-0 top-0 h-12 flex items-center bg-white dark:bg-black dark:text-white pl-12 duration-150"
	class:lg:ml-72={$sidebarShown}
	style="transition-property: margin;"
>
	<div class="flex-1 text-lg px-4 whitespace-nowrap overflow-hidden">{title}</div>

	<button
		id="user-menu-toggle"
		class="flex w-12 lg:w-auto h-12 lg:px-4 items-center justify-center focus:bg-neutral-200 dark:focus:bg-neutral-900"
		aria-label="user menu toggle"
	>
		<div class="hidden lg:inline-block max-w-[120px] mr-4 overflow-hidden whitespace-nowrap">
			{username}
		</div>
		<IconoirUserCircleAlt class="text-lg" />
	</button>

	<Dropdown
		class="w-44 -mt-2 py-1 bg-white dark:bg-black dark:text-white"
		triggeredBy="#user-menu-toggle"
	>
		<DropdownItem defaultClass="px-4 py-2 bg-white dark:bg-black dark:text-white border-none">
			Log Out
		</DropdownItem>
	</Dropdown>
</div>

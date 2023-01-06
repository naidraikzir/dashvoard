<script lang="ts">
	import IconoirUserCircleAlt from '~icons/iconoir/user-circle-alt'
	import { Dropdown, DropdownItem } from 'flowbite-svelte'

	export let username = 'User Name Long'
</script>

<button
	id="user-menu-toggle"
	class="flex w-12 lg:w-auto h-12 lg:px-4 items-center justify-center focus:bg-gray-200 dark:focus:bg-gray-800"
	aria-label="user menu toggle"
>
	<div class="hidden lg:inline-block max-w-[120px] mr-4 overflow-hidden whitespace-nowrap">
		{username}
	</div>
	<IconoirUserCircleAlt class="text-xl" />
</button>

<Dropdown triggeredBy="#user-menu-toggle">
	<DropdownItem>Log Out</DropdownItem>
</Dropdown>

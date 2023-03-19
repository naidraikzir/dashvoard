<script lang="ts">
	import { SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte'
	import { page } from '$app/stores'
	import menu from '$lib/fixtures/menu'

	$: isMenuItemActive = (url: string) =>
		(url === '/' && $page.url.pathname === url) ||
		(url !== '/' && $page.url.pathname.startsWith(url))
</script>

<SidebarWrapper class="!px-0">
	<SidebarGroup class="!space-y-0">
		{#each menu as { url, label, icon }}
			<SidebarItem
				{label}
				href={url}
				active={isMenuItemActive(url)}
				aClass="flex items-center px-4 py-3 text-base font-normal text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
				activeClass="flex items-center px-4 py-3 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-700"
				on:click
			>
				<svelte:fragment slot="icon">
					<svelte:component this={icon} />
				</svelte:fragment>
			</SidebarItem>
		{/each}
	</SidebarGroup>
</SidebarWrapper>

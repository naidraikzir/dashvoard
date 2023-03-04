<script lang="ts">
	import { SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte'
	import IconoirHome from '~icons/iconoir/home'
	import IconoirGraphUp from '~icons/iconoir/graph-up'
	import IconoirSettings from '~icons/iconoir/settings'
	import IconoirTable2Columns from '~icons/iconoir/table-2-columns'
	import { page } from '$app/stores'
	import { routes } from '$lib/stores/routes'

	type MenuItem = {
		url: string
		label: string
		name: keyof typeof icons
	}

	const icons = {
		dashboard: IconoirHome,
		charts: IconoirGraphUp,
		table: IconoirTable2Columns,
		settings: IconoirSettings
	}

	$: menu = <MenuItem[]>[
		{ url: '/', label: 'Dashboard', name: 'dashboard' },
		...$routes.map((item) => ({
			url: `/${item}`,
			label: item
				.split('-')
				.map((word) => word.charAt(0).toUpperCase() + word.substring(1))
				.join(' '),
			name: item
		}))
	]

	$: isMenuItemActive = (url: string) =>
		(url === '/' && $page.url.pathname === url) ||
		(url !== '/' && $page.url.pathname.startsWith(url))
</script>

<SidebarWrapper>
	<SidebarGroup>
		{#each menu as { url, label, name }}
			<SidebarItem
				{label}
				href={url}
				active={isMenuItemActive(url)}
				aClass="flex items-center p-2 text-base font-normal text-gray-500 rounded dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
				activeClass="flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded dark:text-white dark:hover:bg-gray-700"
				on:click
			>
				<svelte:fragment slot="icon">
					<svelte:component this={icons[name]} />
				</svelte:fragment>
			</SidebarItem>
		{/each}
	</SidebarGroup>
</SidebarWrapper>

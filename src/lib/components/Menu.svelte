<script lang="ts">
	import IconoirHome from '~icons/iconoir/home'
	import IconoirGraphUp from '~icons/iconoir/graph-up'
	import IconoirSettings from '~icons/iconoir/settings'
	import { page } from '$app/stores'
	import { routes } from '$lib/stores/routes'
	import { SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte'

	type MenuItem = {
		url: string
		label: string
		name: keyof typeof icons
	}

	const icons = {
		dashboard: IconoirHome,
		charts: IconoirGraphUp,
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
		(url === '/' && $page.route?.id === url) || (url !== '/' && $page.route?.id?.startsWith(url))
</script>

<SidebarWrapper>
	<SidebarGroup>
		{#each menu as { url, label, name }}
			<SidebarItem
				{label}
				href={url}
				active={isMenuItemActive(url)}
				aClass="flex items-center p-2 text-base font-normal text-gray-500 rounded dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
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

<script lang="ts">
	import IconoirHome from '~icons/iconoir/home'
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
				class="transition"
				spanClass="ml-3 {isMenuItemActive(url) ? 'text-black dark:text-white' : 'text-gray-500'}"
			>
				<svelte:fragment slot="icon">
					<svelte:component this={icons[name]} />
				</svelte:fragment>
			</SidebarItem>
		{/each}
	</SidebarGroup>
</SidebarWrapper>

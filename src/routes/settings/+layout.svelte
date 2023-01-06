<script lang="ts">
	import IconoirMenu from '~icons/iconoir/menu'
	import { Listgroup, ListgroupItem } from 'flowbite-svelte'
	import { page } from '$app/stores'
	import { clickOutside } from '$lib/directives/clickOutside'

	let shown = false

	interface MenuItem {
		name: string
		href: string
	}

	let menu = [
		{ name: 'Profile', href: '/settings/profile' },
		{ name: 'Notifications', href: '/settings/notifications' }
	]

	function onMenuClick(value: boolean) {
		return () => (shown = value)
	}

	$: menuClass = shown
		? 'translate-x-0 opacity-100 visible'
		: '-translate-x-full opacity-0 invisible'

	$: isMenuActive = (item: MenuItem) => {
		const itemParts = item.href.split('/')
		const routeParts = $page.route.id?.split('/') || []
		return routeParts[routeParts.length - 1] === itemParts[itemParts.length - 1]
	}
</script>

<button class="lg:hidden -ml-2 mb-4 p-2 text-xl" on:click|stopPropagation={onMenuClick(!shown)}>
	<IconoirMenu />
</button>

<div class="relative flex">
	<div
		class="w-48 lg:ml-0 absolute lg:static lg:translate-x-0 lg:opacity-100 lg:visible transition-all {menuClass}"
		use:clickOutside={onMenuClick(false)}
	>
		<Listgroup active>
			{#each menu as link}
				<ListgroupItem current={isMenuActive(link)} on:click={onMenuClick(false)} {...link}>
					{link.name}
				</ListgroupItem>
			{/each}
		</Listgroup>
	</div>

	<div class="flex-1 lg:ml-8">
		<slot />
	</div>
</div>

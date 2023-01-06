<script lang="ts">
	import { page } from '$app/stores'
	import { routes } from '$lib/stores/routes'

	interface MenuItem {
		url: string
		label: string
	}

	$: menu = [
		{ url: '/', label: 'Dashboard' },
		...$routes.map((item) => ({
			url: `/${item}`,
			label: item
				.split('-')
				.map((word) => word.charAt(0).toUpperCase() + word.substring(1))
				.join(' ')
		}))
	]

	$: menuItemClass = (item: MenuItem) => {
		return (item.url === '/' && $page.route?.id === item.url) ||
			(item.url !== '/' && $page.route?.id?.startsWith(item.url))
			? 'bg-gray-200 dark:bg-gray-800 dark:text-white'
			: 'text-gray-500 dark:text-gray-400'
	}
</script>

{#each menu as item}
	<a href={item.url} class="block p-4 {menuItemClass(item)}" on:click>
		{item.label}
	</a>
{/each}

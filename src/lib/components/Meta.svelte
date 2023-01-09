<script lang="ts">
	import { page } from '$app/stores'
	import titleify from '$lib/utils/titleify'

	export let title = ''
	export let description = 'A Dashboard App'

	// eslint-disable-next-line no-undef
	const appName = titleify(APP_NAME, '-')

	$: route = $page?.url.pathname.split('/').filter((part) => !!part)
	$: pageName = route?.length ? titleify(route[route.length - 1], '-') : 'Dashboard'
</script>

<svelte:head>
	<title>{title ? `${title} | ${appName}` : `${pageName} | ${appName}`}</title>
	<meta name="description" content={description} />
</svelte:head>

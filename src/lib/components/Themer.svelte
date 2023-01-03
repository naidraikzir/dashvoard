<script lang="ts">
	import IconSunLight from '~icons/iconoir/sun-light'
	import IconHalfMoon from '~icons/iconoir/half-moon'
	import { theme } from '$lib/stores/theme'

	function toggle() {
		$theme = isDark ? 'light' : 'dark'
	}

	$: isDark = $theme === 'dark'
	$: Icon = isDark ? IconHalfMoon : IconSunLight
</script>

<button
	class="p-4 text-xl focus:bg-neutral-200 dark:focus:bg-neutral-800"
	on:click={toggle}
	aria-label="toggle theme"
>
	<svelte:component this={Icon} />
</button>

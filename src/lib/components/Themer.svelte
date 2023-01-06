<script lang="ts">
	import IconoirSunLight from '~icons/iconoir/sun-light'
	import IconoirHalfMoon from '~icons/iconoir/half-moon'
	import { theme } from '$lib/stores/theme'

	function toggle() {
		$theme = isDark ? 'light' : 'dark'
	}

	$: isDark = $theme === 'dark'
	$: Icon = isDark ? IconoirHalfMoon : IconoirSunLight
</script>

<button
	class="w-12 h-12 flex items-center justify-center text-xl focus:bg-gray-200 dark:focus:bg-gray-800"
	on:click={toggle}
	aria-label="toggle theme"
>
	<svelte:component this={Icon} />
</button>

<script lang="ts">
	import { navigating } from '$app/stores'

	let interval: ReturnType<typeof setInterval>
	let progress = 0

	function start() {
		interval = setInterval(() => {
			if (progress < 0.9) {
				progress += 0.025
			}
		}, 100)
	}

	function end() {
		clearInterval(interval)
		progress = 1
		setTimeout(() => {
			progress = 0
		}, 1000)
	}

	$: $navigating ? start() : end()
</script>

<div class="fixed top-0 inset-x-0 h-0.5 z-20">
	<div
		class="absolute inset-0 bg-orange-600 scale-x-0 transition origin-left"
		style={`transform: scaleX(${progress})`}
	/>
</div>

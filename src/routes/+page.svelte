<script lang="ts">
	import { Alert } from 'flowbite-svelte'
	import Chart from '$lib/components/Chart.svelte'

	const chartData = {
		bar: [
			['data1', 30, 200, 100, 170, 150, 250],
			['data2', 130, 100, 140, 35, 110, 50]
		],
		pie: [
			['data1', 30],
			['data2', 120]
		],
		areaSpline: [
			['data1', 300, 350, 300, 0, 0, 0],
			['data2', 130, 100, 140, 200, 150, 50]
		]
	}
</script>

<Alert color="red">
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</Alert>

<Chart class="mt-8" type="bar" data={chartData.bar} />
<Chart class="mt-8" type="pie" data={chartData.pie} />
<Chart class="mt-8" type="area-spline" data={chartData.areaSpline} />

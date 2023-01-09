<script lang="ts">
	import { Card } from 'flowbite-svelte'
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

<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
	<Card class="!max-w-full col-span-3 lg:col-span-2">
		<Chart type="bar" data={chartData.bar} />
	</Card>

	<Card class="!max-w-full col-span-3 lg:col-span-1">
		<Chart type="pie" data={chartData.pie} />
	</Card>

	<Card class="!max-w-full col-span-3">
		<Chart types={{ data1: 'areaSpline', data2: 'bar' }} data={chartData.areaSpline} />
	</Card>
</div>

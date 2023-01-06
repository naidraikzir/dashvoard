<script lang="ts">
	import 'billboard.js/dist/theme/datalab.min.css'
	import bb, {
		type Chart,
		area,
		areaLineRange,
		areaSpline,
		areaSplineRange,
		areaStep,
		bar,
		bubble,
		candlestick,
		donut,
		gauge,
		line,
		pie,
		radar,
		scatter,
		spline,
		step
	} from 'billboard.js'
	import { createEventDispatcher, onMount } from 'svelte'

	const types = {
		area,
		'area-line-range': areaLineRange,
		'area-spline': areaSpline,
		'area-spline-range': areaSplineRange,
		'area-step': areaStep,
		bar,
		bubble,
		candlestick,
		donut,
		gauge,
		line,
		pie,
		radar,
		scatter,
		spline,
		step
	}

	export let type: keyof typeof types
	export let data: (string | number)[][]

	const dispatch = createEventDispatcher()

	let chart: Chart
	let chartContainer: HTMLElement

	onMount(() => {
		chart = bb.generate({
			bindto: chartContainer,
			data: {
				type: types[type](),
				columns: data,
				onclick: (d) => dispatch('click', d)
			}
		})

		new ResizeObserver(() => chart.resize()).observe(chartContainer)
	})
</script>

<div bind:this={chartContainer} {...$$props} class={$$props.class} />

<style>
	:global(.dark .bb path),
	:global(.dark .bb line) {
		stroke: white;
	}

	:global(.dark .bb text) {
		fill: white;
	}

	:global(.dark .bb-tooltip) {
		color: black;
	}
</style>

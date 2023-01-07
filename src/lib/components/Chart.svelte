<script lang="ts">
	import 'billboard.js/dist/theme/datalab.min.css'
	import type { Chart, ChartTypes } from 'billboard.js'
	import bb, {
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

	interface OnlyType {
		type: ChartTypes
		types?: never
	}

	interface OnlyTypes {
		types: { [key: string]: ChartTypes }
		type?: never
	}

	type WhichType = OnlyType | OnlyTypes

	const chartTypes = {
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
	}

	const dispatch = createEventDispatcher()
	export let data: (string | number)[][]
	let chart: Chart
	let chartContainer: HTMLElement

	function whichType(): WhichType {
		if ($$props.types)
			return {
				types: Object.keys($$props.types).reduce(
					(obj, key) => ({
						...obj,
						[key]: chartTypes[<keyof typeof chartTypes>$$props.types[key]]()
					}),
					{}
				)
			}
		if ($$props.type) return { type: chartTypes[<keyof typeof chartTypes>$$props.type]() }
		return { type: chartTypes.area() }
	}

	onMount(() => {
		chart = bb.generate({
			bindto: chartContainer,
			data: {
				...whichType(),
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

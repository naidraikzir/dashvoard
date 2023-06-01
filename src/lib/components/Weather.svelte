<script lang="ts">
	import IconoirSunLight from '~icons/iconoir/sun-light'
	import IconoirCloudSunny from '~icons/iconoir/cloud-sunny'
	import IconoirFog from '~icons/iconoir/fog'
	import IconoirHeavyRain from '~icons/iconoir/heavy-rain'
	import IconoirSnowFlake from '~icons/iconoir/snow-flake'
	import IconoirThunderstorm from '~icons/iconoir/thunderstorm'
	import { Spinner } from 'flowbite-svelte'
	import { onMount } from 'svelte'

	const WEATHER_CODE_ICONS = [
		{ codes: [0], icon: IconoirSunLight },
		{ codes: [1, 2, 3], icon: IconoirCloudSunny },
		{ codes: [45, 48], icon: IconoirFog },
		{ codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], icon: IconoirHeavyRain },
		{ codes: [71, 73, 75, 77, 85, 86], icon: IconoirSnowFlake },
		{ codes: [95, 96, 99], icon: IconoirThunderstorm }
	]

	type Weather = {
		current_weather: {
			weathercode: number
			temperature: number
		}
	}
	let weather: Weather

	onMount(() => {
		getLocation()
	})

	function getLocation() {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				({ coords }) => {
					fetchWeather(coords.latitude, coords.longitude)
				},
				() => {
					fetchWeather()
				}
			)
		}
	}

	async function fetchWeather(lat = 0, lng = 0) {
		const res = await fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
		)
		weather = await res.json()
	}

	$: Icon =
		weather?.current_weather?.weathercode !== undefined
			? WEATHER_CODE_ICONS.find((i) => i.codes.includes(weather?.current_weather?.weathercode))
					?.icon
			: null
</script>

{#if weather}
	<div class="flex items-start">
		<div class="text-5xl">{weather.current_weather.temperature}</div>
		<svelte:component this={Icon} />
		<div class="text-5xl">C</div>
	</div>
{:else}
	<Spinner />
{/if}

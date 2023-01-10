<div class="max-w-3xl mx-auto flex flex-col gap-4">
	{#each Array.from(Array(5).keys()) as key}
		<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded">
			<div class="font-bold mb-2">Notification Title {key + 1}</div>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis necessitatibus accusantium,
				iste fuga aliquid possimus quos.
			</div>
		</div>
	{/each}
</div>

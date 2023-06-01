<script lang="ts">
	export let quote = {
		content: '',
		author: ''
	}
</script>

<figure class="text-center">
	<blockquote class="inline-block p-2 text-xl">
		“{quote.content}”
	</blockquote>
	<figcaption class="mt-2">－ {quote.author}</figcaption>
</figure>

<script lang="ts">
	import type { ICellRendererParams } from 'ag-grid-community'
	import { Button } from 'flowbite-svelte'

	import IconoirEyeEmpty from '~icons/iconoir/eye-empty'
	import IconoirEdit from '~icons/iconoir/edit'
	import IconoirTrash from '~icons/iconoir/trash'

	export let params: ICellRendererParams
	export let onClick: (type: string, id: number) => void
</script>

<div class="h-full flex items-center gap-2">
	<Button class="!p-2" color="dark" on:click={() => onClick('view', params.data.id)}>
		<IconoirEyeEmpty />
	</Button>
	<Button class="!p-2" on:click={() => onClick('edit', params.data.id)}>
		<IconoirEdit />
	</Button>
	<Button class="!p-2" color="red" on:click={() => onClick('delete', params.data.id)}>
		<IconoirTrash />
	</Button>
</div>

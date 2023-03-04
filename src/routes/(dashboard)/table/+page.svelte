<script lang="ts">
	import type { ColDef } from 'ag-grid-community'

	import { AgGrid, cellRendererFactory } from '$lib/components/AgGrid'
	import type { PageData } from './$types'
	import ActionCell from './ActionCell.svelte'

	export let data: PageData
	const {
		products: { products: rowData }
	} = data

	const columnDefs: ColDef[] = [
		{ field: 'title', width: 250, pinned: 'left' },
		{ field: 'brand', width: 150 },
		{ field: 'description', width: 500 },
		{ field: 'category', width: 150 },
		{ field: 'price' },
		{ field: 'rating' },
		{
			field: 'action',
			width: 150,
			sortable: false,
			cellRenderer: cellRendererFactory(
				(c, params) =>
					new ActionCell({
						target: c.eGui,
						props: { params, onClick: onActionColumnClick }
					})
			)
		}
	]

	function onActionColumnClick(type: string, id: number) {
		console.log('action:', type, id)
	}
</script>

<div class="h-[600px]">
	<AgGrid {rowData} {columnDefs} />
</div>

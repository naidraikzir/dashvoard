<script lang="ts">
	import type { ColDef } from 'ag-grid-community'
	import AgGridSvelte from 'ag-grid-svelte'
	import 'ag-grid-community/styles/ag-grid.css'
	import 'ag-grid-community/styles/ag-theme-alpine.css'

	import { theme } from '$lib/stores/theme'

	export let defaultColDef: ColDef = { width: 100, sortable: true, unSortIcon: true }
	export let columnDefs: ColDef[] = []
	export let rowData: []
</script>

<div class="h-full ag-theme-alpine" class:ag-theme-alpine-dark={$theme === 'dark'}>
	<AgGridSvelte {rowData} {columnDefs} {defaultColDef} />
</div>

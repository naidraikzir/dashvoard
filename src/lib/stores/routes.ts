import { writable } from 'svelte/store'

export const routes = writable<string[]>([])

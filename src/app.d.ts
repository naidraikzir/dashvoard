// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />
declare const APP_NAME: string
declare namespace App {
	// interface Error {}
	interface Locals {
		sidebar: string
	}
	// interface PageData {}
	// interface Platform {}
}

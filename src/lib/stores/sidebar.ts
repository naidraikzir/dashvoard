import { browser } from '$app/environment'
import { writable } from 'svelte/store'

export const sidebarShown = writable(false)

export const initializeSidebar = (value: string) => {
	sidebarShown.set(browser && window.innerWidth < 1024 ? false : value === 'true')
}

sidebarShown.subscribe((value) => {
	if (browser) {
		document.cookie = `sidebar=${value};max-age=31536000;path="/"`
	}
})

if (browser) {
	setWidthCookie()
	onresize = setWidthCookie
}

function setWidthCookie() {
	document.cookie = `width=${document.body.clientWidth};max-age=31536000;path="/"`
}

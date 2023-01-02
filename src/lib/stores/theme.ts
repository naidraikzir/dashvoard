import { writable } from 'svelte/store'
import { browser } from '$app/environment'

const stored = browser ? localStorage.theme : undefined

export const theme = writable(stored)

theme.subscribe((value) => {
  if (browser) {
    localStorage.theme = value
    document.documentElement.removeAttribute('class')
    document.documentElement.classList.add(value)
  }
})

export function clickOutside(element: HTMLElement, callbackFunction: () => void) {
	function onClick(event: Event) {
    const { target } = event
		if (!element.contains(target as HTMLElement)) {
			callbackFunction()
		}
	}

	document.body.addEventListener('click', onClick)

	return {
		update(newCallbackFunction: () => void) {
			callbackFunction = newCallbackFunction
		},
		destroy() {
			document.body.removeEventListener('click', onClick)
		}
	}
}

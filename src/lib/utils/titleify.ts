export default function (str: string, separator: string) {
	return str
		.split(separator)
		.map((word) => word.replace(word[0], word[0].toUpperCase()))
		.join(' ')
}

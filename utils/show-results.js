import { formatBytes } from './format-bytes.js';

export function showResults(name, oldSize, newSize) {
	console.log(name);
	console.log(
		`${formatBytes(oldSize)} MB`,
		' ----> ',
		`${formatBytes(newSize)} MB`
	);
}

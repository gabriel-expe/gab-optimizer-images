import { isImage } from './is-image.js';
import { optimizeImage } from './optimize-image.js';

export function processFile(path) {
	if (isImage(path)) {
		optimizeImage(path);
	}
}

import { openSync, readSync, closeSync } from 'node:fs';

const SUPPORTED_IMAGES_FORMATS = {
	JPEG: [0xff, 0xd8, 0xff],
	PNG: [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],
	WEBP: [0x52, 0x49, 0x46, 0x46],
	GIF: [0x47, 0x49, 0x46],
};

export function isImage(filePath) {
	const buffer = Buffer.alloc(8);
	const fd = openSync(filePath, 'r');
	readSync(fd, buffer, 0, 8, 0);
	closeSync(fd);

	for (const format in SUPPORTED_IMAGES_FORMATS) {
		const signature = SUPPORTED_IMAGES_FORMATS[format];
		if (signature.every((byte, index) => byte === buffer[index])) {
			return true;
		}
	}

	return false;
}

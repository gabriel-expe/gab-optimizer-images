import { promises } from 'node:fs';
import { basename } from 'node:path';
import sharp from 'sharp';
import { createDestinationPath } from './create-destination-path.js';
import { argv } from '../config/config.js';
import { showResults } from '../utils/show-results.js';

export async function optimizeImage(path) {
	const { quality, format: toFormat, resize } = argv;
	try {
		const { format, width } = await sharp(path).metadata();
		const destinationPath = await createDestinationPath(
			path,
			format,
			toFormat
		);
		switch (format) {
			case 'jpeg':
			case 'jpg':
				await sharp(path)
					.resize(resize ?? width)
					.jpeg({ mozjpeg: true, quality })
					.toFormat(toFormat ?? format)
					.toFile(destinationPath);
				break;
			case 'png':
				await sharp(path)
					.resize(resize ?? width)
					.png({ quality })
					.toFormat(toFormat ?? format)
					.toFile(destinationPath);
				break;
			case 'gif':
				await sharp(path, { animated: true })
					.resize(resize ?? width)
					.toFormat(toFormat ?? format)
					.toFile(destinationPath);
				break;
			default:
				break;
		}

		const { size: oldSize } = await promises.stat(path);
		const { size: newSize } = await promises.stat(destinationPath);

		showResults(basename(path), oldSize, newSize);
	} catch (error) {
		console.log(
			'Error creating and optimizing image ',
			basename(path),
			error
		);
	}
}

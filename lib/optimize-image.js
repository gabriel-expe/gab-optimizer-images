import { createDestinationPath } from './create-destination-path.js';
import sharp from 'sharp';
import { basename } from 'node:path';
import { argv } from '../config/config.js';

export async function optimizeImage(path) {
	const { quality, format: toFormat, resize } = argv;
	const destinationPath = await createDestinationPath(path);
	try {
		const { format, width } = await sharp(path).metadata();
		console.log(toFormat);

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
					.toFormat(toFormat)
					.toFile(destinationPath);
				break;
			case 'gif':
				await sharp(path, { animated: true })
					.resize(resize ?? width)
					.toFormat(toFormat)
					.toFile(destinationPath);
				break;
			default:
				break;
		}
	} catch (error) {
		console.log(
			'Error creating and optimizing image ',
			basename(path),
			error
		);
	} finally {
		console.log('image Optimized: ', basename(path));
	}
}

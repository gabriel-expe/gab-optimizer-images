import { join, relative, resolve, dirname, basename } from 'node:path';
import { promises } from 'node:fs';
import { argv } from '../config/config.js';

const CONTAINER_NAME = 'gab-optimized-images';

export async function createDestinationPath(path, format, toFormat) {
	const internalPath = relative(resolve(argv._[1]), resolve(path));
	const destinationPath = dirname(
		join(resolve(argv.destination), CONTAINER_NAME, internalPath)
	);

	try {
		await promises.mkdir(destinationPath, { recursive: true });
		const response = toFormat
			? join(
					destinationPath,
					`${basename(internalPath, `.${format}`)}.${toFormat}`
			  )
			: join(destinationPath, basename(internalPath));

		console.log(response);
		return response;
	} catch (error) {
		console.log(
			'Error creating directories: ',
			destinationPath,
			error.message
		);
		process.exit(1);
	}
}

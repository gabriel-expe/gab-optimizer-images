import { readdir, lstat } from 'node:fs';
import { join } from 'node:path';
import { processFile } from './process-file.js';

export function processDirectory(path) {
	readdir(path, (err, references) => {
		if (err) {
			console.log('Error reading directory references ', err.message);
			process.exit(1);
		}

		references.forEach((ref) => {
			const fullPath = join(path, ref);
			lstat(fullPath, (err, stats) => {
				if (err) {
					console.log('Error reading reference statistics ', err);
					process.exit(1);
				}

				if (!stats.isDirectory()) {
					processFile(fullPath);
				} else {
					processDirectory(fullPath);
				}
			});
		});
	});
}

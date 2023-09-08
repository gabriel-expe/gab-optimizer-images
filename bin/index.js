#!/usr/bin/env node

import { lstat, mkdir } from 'node:fs';
import { join } from 'node:path';
import { processFile } from '../lib/process-file.js';
import { processDirectory } from '../lib/process-directory.js';
import { argv } from '../config/config.js';

const path = argv._[1];
lstat(path, (err, stats) => {
	if (err) {
		console.log('Error reading stats from ', path);
		process.exit(1);
	}

	const destinationPath = argv.destination
		? join(argv.destination, 'gab-optimized-images')
		: join('.', 'gab-optimized-images');

	mkdir(destinationPath, { recursive: true }, (err) => {
		if (err) {
			console.log('Error creating a new directory ', err);
			process.exit(1);
		}

		if (!stats.isDirectory()) {
			processFile(path);
		} else {
			processDirectory(path);
		}
	});
});

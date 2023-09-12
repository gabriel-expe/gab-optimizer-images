#!/usr/bin/env node

import { lstat } from 'node:fs';
import { processFile } from '../lib/process-file.js';
import { processDirectory } from '../lib/process-directory.js';
import { argv } from '../config/config.js';

const path = argv._[1];
if (path) {
	lstat(path, (err, stats) => {
		console.log(path);
		if (err) {
			console.log('Error reading stats from ', path);
			process.exit(1);
		}

		if (!stats.isDirectory()) {
			processFile(path);
		} else {
			processDirectory(path);
		}
	});
} else {
	console.log('Missing command, you can try compress');
	process.exit(1);
}

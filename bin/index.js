#!/usr/bin/env node

import { lstat } from 'node:fs';
import { processFile } from '../lib/process-file.js';
import { processDirectory } from '../lib/process-directory.js';

const targetPath = process.argv[2] ?? '.';

lstat(targetPath, (err, stats) => {
	if (err) {
		console.error('Error reading target path', err.message);
		process.exit(1);
	}

	if (stats.isFile()) {
		processFile(targetPath);
	} else if (stats.isDirectory()) {
		processDirectory(targetPath);
	}
});

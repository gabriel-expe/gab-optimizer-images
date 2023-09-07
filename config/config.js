import { yargs } from 'yargs';

export const argv = yargs
	.options({
		resize: {
			alias: 'r',
			describe: 'Resize with maximum width in pixels',
			type: 'number',
		},
		quality: {
			alias: 'q',
			describe: 'Quality setting, default 70',
			type: 'number',
			default: 70,
		},
		format: {
			alias: 'f',
			describe: 'Output format for png/jpg/webp',
			type: 'string',
		},
		destination: {
			alias: 'd',
			describe: 'Destination path to create the new images folder',
			type: 'string',
		},
	})
	.help().argv;

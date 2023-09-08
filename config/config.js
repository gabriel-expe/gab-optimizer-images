import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

export const { argv } = yargs(hideBin(process.argv)).command({
	command: 'compress',
	describe: 'optimize images in the folder',
	builder: {
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
			describe:
				'Destination path to create the new images folder, by default is the folder where user is executing program',
			type: 'string',
			default: '.',
		},
	},
});

import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

const COLOR = '\x1b[36m';
const RESET_COLOR = '\x1b[0m';

export const { argv } = yargs(hideBin(process.argv))
	.scriptName('gio')
	.usage('$0 <cmd> [args]')
	.command({
		command: 'compress',
		describe: `optimize images in the folder, use ${COLOR}gio compress --help${RESET_COLOR} to see parameters`,
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
	})
	.help()
	.alias('help', 'h')
	.version()
	.alias('version', 'v');

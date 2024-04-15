import chalk from 'chalk';
import { Command } from 'commander';

import { defaultDirectory, defaultExclude, defaultExtensions, defaultMaxLineLength } from '@/constants/defaults';

import { AppCommand } from './AppCommand';

export class DefaultsCommand extends AppCommand {
	constructor(program: Command) {
		super(program);
	}

	protected register(program: Command): void {
		program
			.command('defaults')
			.description('Outputs the defaults for the tool')
			.argument('[key]', 'The key to display the default value for', 'all')
			.action((key: string) => {
				switch (key) {
					case 'debug':
						console.log(chalk.bold('Debug:'), false);
						break;
					case 'dry-run':
						console.log(chalk.bold('Dry Run:'), false);
						break;
					case 'silent':
						console.log(chalk.bold('Silent:'), false);
						break;
					case 'recursive':
						console.log(chalk.bold('Recursive:'), false);
						break;
					case 'max-line-length':
						console.log(chalk.bold('Max Line Length:'), defaultMaxLineLength);
						break;
					case 'exclude':
						console.log(chalk.bold('Exclude:'), defaultExclude.join(', '));
						break;
					case 'extensions':
						console.log(chalk.bold('Extensions:'), defaultExtensions.join(', '));
						break;
					case 'path':
						console.log(chalk.bold('Path:'), defaultDirectory);
						break;
					case 'all':
					default:
						console.log(chalk.bold('Default Configuration:'));
						console.log(`Path: ${defaultDirectory}`);
						console.log(`Extensions: ${defaultExtensions.join(', ')}`);
						console.log(`Max Line Length: ${defaultMaxLineLength}`);
						console.log(`Exclude: ${defaultExclude.join(', ')}`);
						console.log(`Recursive: false`);
						console.log(`Silent: false`);
						console.log(`Dry Run: false`);
						console.log(`Debug: false`);
						break;
				}
			});
	}
}

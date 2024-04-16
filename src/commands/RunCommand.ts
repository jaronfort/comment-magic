import chalk from 'chalk';
import { Command } from 'commander';

import { CommentMagic } from '@/app/CommentMagic';
import { CommentMagicConfig } from '@/app/CommentMagicConfig';
import { defaultDirectory, defaultExclude, defaultExtensions, defaultMaxLineLength } from '@/constants/defaults';
import { removeDuplicates } from '@/utils/array';

import { AppCommand } from './AppCommand';

export class RunCommand extends AppCommand {
	constructor(program: Command) {
		super(program);
	}

	protected register(program: Command): void {
		program
			// The "run" command is the default command
			.command('run')
			.description('Process comments in your codebase')

			// Core Options
			.option('-d, --debug', 'Output extra debugging', false)
			.option('-r, --recursive', 'Search directories recursively', false)
			.option(
				'-p, --path <path...>',
				'Directory to search for comments (defaults to the current directory)',
				defaultDirectory,
			)
			.option(
				'-e, --extensions <extensions...>',
				'File extensions to search for comments (defaults to ts,tsx,js,jsx)',
				defaultExtensions,
			)
			.option('-x, --exclude <exclude...>', 'Files or directories to exclude from the search', defaultExclude)

			// Misc. Options
			.option('--dry-run', 'Run the tool without making any changes', false)
			.option('--silent', 'Run the tool without any output', false)
			.option(
				'--override-default-exclude',
				'Override the default exclude list (node_modules, .git, .vscode, and so on...)',
				false,
			)
			.option(
				'--max-line-length <length>',
				'The maximum line length for comments (defaults to 80)',
				defaultMaxLineLength.toString(),
			)

			// Action
			.action((options) => {
				const config: CommentMagicConfig = {
					debug: options.debug,
					recursive: options.recursive,
					paths: options.path,
					extensions: options.extensions,
					dryRun: options.dryRun,
					silent: options.silent && !options.debug,
					exclude: options.overrideDefaultExclude ? options.exclude : removeDuplicates([...defaultExclude, ...options.exclude]),
					maxLineLength: Number(options.maxLineLength) || 80,
				};

				if (config.debug) {
					console.log(chalk.bold(chalk.yellow('Running with the following configuration:')));
					// TODO: Output the configuration (verbose)
				}

				try {
					// Create a new instance of the CommentMagic tool
					const app = new CommentMagic(config);

					// Run the tool and get the exit status
					const exitStatus = app.run() ? 0 : 1;

					// Exit the process with the exit status
					process.exit(exitStatus);
				} catch (error: any) {
					console.error(chalk.red('An error occurred while running the tool:'));
					console.error(error);
					process.exit(1);
				}
			});
	}
}

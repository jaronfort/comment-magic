import chalk from 'chalk';
import { Command } from 'commander';


import { convertInlineCommentToBlock } from '@/helpers/convertInlineCommentToBlock';
import { AppCommand } from './AppCommand';

export class TestCommand extends AppCommand {
	constructor(program: Command) {
		super(program);
	}

	protected register(program: Command): void {
		program
			.command('test')
			.description('Tests the tool.')
			.action(() => {
				console.log(chalk.bold('Test:'), 'Test');

				const testContent = `
					///
					/// This is a test comment
					/// @param test - The test parameter
					/// @returns The test result
					function test(test: string): string {
						return test;
					}

					/// This is a test comment
					///
					/// @param test - The test parameter
					/// @returns The test result
					function test2(test: string): string {
						return test;
					}

					const test = 'test'; /// This should not be processed

					/// This is a test comment
					///
					/// @param test - The test parameter
					/// @returns The test result
					const test2 = 'test'; // This also should not be processed
				`;

				const result = convertInlineCommentToBlock(testContent, {
					spacesAfterCommentStart: 1,
					removeEmptyLines: true,
				});

				console.log(chalk.bold('Input:') + '\n');
				console.log(testContent);
				console.log(`\n------------------------------\n`);
				console.log(chalk.bold('Result:') + '\n');
				console.log(result);
			});
	}
}

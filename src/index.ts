#!/usr/bin/env node

import { program } from 'commander';

import { RunCommand } from '@/commands/RunCommand';
import { DefaultsCommand } from '@/commands/DefaultsCommand';

import { version } from '../package.json';
import { TestCommand } from './commands/TestCommand';

function main() {
	program
		.name('comment-magic')
		.description('A tool to search and process comments in your codebase.')
		.version(version, '-v, --version', 'Output the current version')

		// Help Option
		.helpOption('-h, --help', 'Output usage information');

	// Run Command
	new RunCommand(program);

	// Defaults Command
	new DefaultsCommand(program);

	// Test Command
	new TestCommand(program);

	program.parse(process.argv);
}

// Run the main function
main();

import chalk from 'chalk';
import path from 'path';

import { convertInlineCommentToBlock, handleFileOrDirectory } from '@/helpers';

import { CommentMagicBase } from './CommentMagicBase';
import { CommentMagicConfig } from './CommentMagicConfig';
import { writeFile } from '@/utils/filesystem';

/**
 * The CommentMagic application.
 */
export class CommentMagic extends CommentMagicBase {
	/**
	 * Initializes a new instance of the CommentMagic class.
	 *
	 * @param {CommentMagicConfig} config The configuration for the CommentMagic application.
	 */
	constructor(config: CommentMagicConfig) {
		super(config);
		this.handleFile = this.handleFile.bind(this);
		this.handleDirectory = this.handleDirectory.bind(this);
	}

	/**
	 * Runs the CommentMagic application.
	 *
	 * @returns {boolean} True if the application ran successfully, false otherwise.
	 */
	run(): boolean {
		// Clear the processed files list
		this.processedFiles.length = 0;

		// Run on each path directory
		for (const directory of this.config.paths) {
			const absolutePath = path.resolve(directory);

			this.runInDirectory(absolutePath);
		}

		// Output the number of files that were processed.
		this.output(chalk.bold(this.getProcessedFileCountString()));

		return true;
	}

	/**
	 * Runs the application in the specified directory.
	 *
	 * @param {string} filePath The directory to run the application in.
	 */
	private runInDirectory(filePath: string): void {
		handleFileOrDirectory(filePath, this.handleFile, this.handleDirectory);
	}

	/**
	 * Handles a file.
	 *
	 * @param {string} filePath The path to the file.
	 * @param {string} fileContents The contents of the file.
	 */
	private handleFile(filePath: string, fileContents: string): void {
		const fileName = path.basename(filePath);

		if (this.isExcluded(fileName)) {
			// Skip the file if it is in the exclude list
			this.debugOutput(chalk.yellow(`${chalk.bold('[SKIPPED]')} ${filePath}`));
			return;
		}

		if (!this.isExtensionIncluded(filePath)) {
			// Skip the file if it is not in the extensions list
			this.debugOutput(chalk.yellow(`${chalk.bold('[SKIPPED]')} ${filePath}`));
			return;
		}

		// Convert the inline comments to multi-line comments
		const convertedContents = convertInlineCommentToBlock(fileContents, {
			spacesAfterCommentStart: 1,
		});

		if (fileContents !== convertedContents) {
			// Overwrite the file with the converted contents
			writeFile(filePath, convertedContents);

			// Process the file
			this.output(chalk.magentaBright(filePath));

			this.processedFiles.push(filePath);
		} else {
			// Skip the file if it was not modified
			this.debugOutput(chalk.yellow(`${chalk.bold('[SKIPPED]')} ${filePath}`));
		}
	}

	/**
	 * Handles a directory.
	 *
	 * @param {string} filePath The path to the directory.
	 * @param {string[]} directoryContents The contents of the directory.
	 */
	private handleDirectory(filePath: string, directoryContents: string[]): void {
		const fileName = path.basename(filePath);

		if (this.isExcluded(fileName)) {
			// Skip the directory if it is in the exclude list
			this.debugOutput(chalk.yellow(`${chalk.bold('[SKIPPED]')} ${filePath}`));
			return;
		}

		if (!this.config.recursive) {
			// Skip the directory if the recursive flag is not set
			this.debugOutput(chalk.yellow(`${chalk.bold('[SKIPPED]')} ${filePath}`));
			return;
		}

		for (const item of directoryContents) {
			const absolutePath = path.resolve(filePath, item);

			handleFileOrDirectory(absolutePath, this.handleFile, this.handleDirectory);
		}
	}
}

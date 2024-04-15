import chalk from 'chalk';
import path from 'path';

import { handleFileOrDirectory } from '@/helpers';
import { getFileExtension } from '@/utils/filesystem';

import { CommentMagicConfig } from './CommentMagicConfig';

/**
 * The CommentMagic application.
 */
export class CommentMagic {
	/**
	 * A list of all files that were processed.
	 */
	protected readonly processedFiles: string[] = [];

	/**
	 * Initializes a new instance of the CommentMagic class.
	 *
	 * @param {CommentMagicConfig} config The configuration for the CommentMagic application.
	 */
	constructor(protected readonly config: CommentMagicConfig) {
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
		console.log(chalk.bold(this.getProcessedFileCountString()));

		return true;
	}

	/**
	 * The number of files that were processed during the run.
	 */
	get numberOfProcessedFiles(): number {
		return this.processedFiles.length;
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

		if (this.config.exclude.includes(fileName)) {
			// Skip the file if it is in the exclude list
			this.debugOutput(chalk.yellow(`${chalk.bold('[SKIPPED]')} ${filePath}`));
			return;
		}

		const fileExtension = `.${getFileExtension(filePath)}`;
		const extensions: string[] = this.config.extensions as string[];

		if (!extensions.includes(fileExtension)) {
			// Skip the file if it is not in the extensions list
			this.debugOutput(chalk.yellow(`${chalk.bold('[SKIPPED]')} ${filePath}`));
			return;
		}

		// Process the file
		console.log(chalk.magentaBright(filePath));
		// TODO: Process the file contents

		this.processedFiles.push(filePath);

		if (false) {
			console.log(fileContents);
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

		if (this.config.exclude.includes(fileName)) {
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

	/**
	 * Prints the given output if the debug flag is set.
	 */
	private debugOutput(output: string): void {
		if (this.config.debug) {
			console.log(output);
		}
	}

	/**
	 * Computes the final processed file count string.
	 */
	private getProcessedFileCountString(): string {
		if (this.numberOfProcessedFiles === 0) {
			return chalk.redBright('No files processed.');
		}

		if (this.numberOfProcessedFiles === 1) {
			return chalk.greenBright('Processed 1 file.');
		}

		return chalk.greenBright(`Processed ${this.numberOfProcessedFiles} files.`);
	}
}

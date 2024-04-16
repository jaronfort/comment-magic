import chalk from 'chalk';

import { getFileExtension } from '@/utils/filesystem';

import { CommentMagicConfig } from './CommentMagicConfig';

/**
 * The CommentMagic application.
 */
export class CommentMagicBase {
	/**
	 * A list of all files that were processed.
	 */
	protected readonly processedFiles: string[] = [];

	/**
	 * Initializes a new instance of the CommentMagic class.
	 *
	 * @param {CommentMagicConfig} config The configuration for the CommentMagic application.
	 */
	constructor(protected readonly config: CommentMagicConfig) {}

	/**
	 * The number of files that were processed during the run.
	 */
	get numberOfProcessedFiles(): number {
		return this.processedFiles.length;
	}

	/**
	 * Indicates whether or not the application will run in recursive mode.
	 */
	get isRecursive(): boolean {
		return this.config.recursive;
	}

	/**
	 * Indicates whether or not the application will run in silent mode.
	 */
	get isSilent(): boolean {
		return this.config.silent;
	}

	/**
	 * Indicates whether or not the application will run in debug mode.
	 */
	get isDebug(): boolean {
		return this.config.debug;
	}

	/**
	 * Indicates whether or not the application will run in dry-run mode.
	 */
	get isDryRun(): boolean {
		return this.config.dryRun;
	}

	/**
	 * Registers the given file as a processed file.
	 *
	 * @param {string} filePath The path to the file that was processed.
	 */
	protected registerProcessedFile(filePath: string): void {
		this.processedFiles.push(filePath);
	}

	/**
	 * Prints the given output if the debug flag is set.
	 */
	protected debugOutput(output: string): void {
		if (!this.config.debug) return;

		process.stdout.write(output + '\n');
	}

	/**
	 * Prints the given output if the silent flag is not set.
	 *
	 * @param {string} output The output to print.
	 */
	protected output(output: string): void {
		if (this.config.silent) return;

		process.stdout.write(output + '\n');
	}

	/**
	 * Computes the final processed file count string.
	 *
	 * @returns {string} The processed file count string.
	 */
	protected getProcessedFileCountString(): string {
		if (this.numberOfProcessedFiles === 0) {
			return chalk.redBright('No files processed.');
		}

		if (this.numberOfProcessedFiles === 1) {
			return chalk.greenBright('Processed 1 file.');
		}

		return chalk.greenBright(`Processed ${this.numberOfProcessedFiles} files.`);
	}

	/**
	 * Indicates whether or not the given file name or path is excluded from processing.
	 *
	 * @param {string} fileNameOrPath The file name or path to check.
	 * @returns {boolean} True if the file is excluded, false otherwise.
	 */
	protected isExcluded(fileNameOrPath: string): boolean {
		return this.config.exclude.includes(fileNameOrPath);
	}

	/**
	 * Indicates whether or not the given file extension is included in the list of extensions.
	 *
	 * @param {string} filePath The path to the file to check.
	 * @returns {boolean} True if the extension is included, false otherwise.
	 */
	protected isExtensionIncluded(filePath: string): boolean {
		const fileExtension = `.${getFileExtension(filePath)}`;
		const extensions: string[] = this.config.extensions as string[];

		return extensions.includes(fileExtension);
	}
}

import { SupportedFileExtension } from '@/types/languages.types';

/**
 * The configuration for the CommentMagic application.
 */
export type CommentMagicConfig = {
	/**
	 * Indicates whether or not to output extra debugging information.
	 */
	debug: boolean;

	/**
	 * Indicates whether or not directory traversal is recursive.
	 */
	recursive: boolean;

	/**
	 * The file or directory paths to search. Directories will be searched
	 * for files and files will be processed directly.
	 */
	paths: string[];

	/**
	 * The file extensions to search for.
	 */
	extensions: SupportedFileExtension[];

	/**
	 * Indicates whether or not to run the tool without making any changes.
	 */
	dryRun: boolean;

	/**
	 * Indicates whether or not to run the tool without any output.
	 */
	silent: boolean;

	/**
	 * A list of files to exclude from the search.
	 */
	exclude: string[];

	/**
	 * The maximum line length for comments.
	 */
	maxLineLength: number;
};

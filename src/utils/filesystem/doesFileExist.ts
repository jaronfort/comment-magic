import fs from 'fs';

/**
 * Indicates whether or not a file or directory exists.
 *
 * @param path The path to the file or directory.
 * @returns {boolean} True if the file or directory exists, false otherwise.
 */
export function doesFileExist(path: string): boolean {
	return fs.existsSync(path);
}

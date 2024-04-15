import fs from 'fs';
import { doesFileExist } from './doesFileExist';

/**
 * List all files in a directory.
 *
 * @param directory - The directory to list the files
 * @returns An array of strings containing the file names
 */
export function listFilesInDirectory(directory: string): string[] {
	if (!doesFileExist(directory)) {
		return [];
	}

	return fs.readdirSync(directory);
}

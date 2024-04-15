import fs from 'fs';

import { doesFileExist } from './doesFileExist';

/**
 * Check if a path is a directory.
 *
 * @param path - The path to check
 * @returns True if the path is a directory, false otherwise
 */
export function isDirectory(path: string): boolean {
	return doesFileExist(path) && fs.statSync(path).isDirectory();
}

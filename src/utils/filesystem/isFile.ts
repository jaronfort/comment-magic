import fs from 'fs';

import { doesFileExist } from './doesFileExist';

/**
 * Check if a path is a file.
 *
 * @param path - The path to check
 * @returns True if the path is a file, false otherwise
 */
export function isFile(path: string): boolean {
	return doesFileExist(path) && fs.statSync(path).isFile();
}

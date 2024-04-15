import fs from 'fs';

import { isDirectory, isFile, listFilesInDirectory } from '@/utils/filesystem';

/**
 * Handles a file or directory.
 *
 * @param {string} filePath The path to the file or directory.
 * @param {(filePath: string, fileContents: string) => void} fileHandler The handler for files.
 * @param {(filePath: string, directorContents: string[]) => void} directoryHandler The handler for directories.
 */
export function handleFileOrDirectory(
	filePath: string,
	fileHandler: (filePath: string, fileContents: string) => void,
	directoryHandler: (filePath: string, directorContents: string[]) => void,
) {
	if (isDirectory(filePath)) {
		const directoryContents = listFilesInDirectory(filePath);

		directoryHandler(filePath, directoryContents);
	} else if (isFile(filePath)) {
		const fileContents = fs.readFileSync(filePath, 'utf-8');

		fileHandler(filePath, fileContents);
	}
}

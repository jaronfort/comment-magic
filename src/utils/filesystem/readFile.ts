import fs from 'fs';

/**
 * Reads a file.
 *
 * @param path The path to the file
 * @returns The content of the file
 */
export function readFile(path: string): string {
	return fs.readFileSync(path, 'utf-8');
}

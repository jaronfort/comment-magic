import fs from 'fs';

/**
 * Write data to a file. If the file already exists, it will be
 * overwritten.
 *
 * @param path The path to the file
 * @param data The data to write to the file
 */
export function writeFile(path: string, data: string): void {
	fs.writeFileSync(path, data, { encoding: 'utf8' });
}

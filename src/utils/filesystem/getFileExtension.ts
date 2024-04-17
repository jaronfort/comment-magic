/**
 * Get the file extension from a path.
 *
 * @param path The path to the file.
 * @returns The file extension.
 */
export function getFileExtension(path: string): string {
	const parts = path.split('.');

	return parts[parts.length - 1];
}

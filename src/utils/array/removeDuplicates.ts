/**
 * Removes duplicates from an array.
 *
 * @param array The array to remove duplicates from. 
 * @returns The array with duplicates removed.
 */
export function removeDuplicates<T>(array: T[]): T[] {
	return [...new Set(array)];
}

/**
 * Gets the leading whitespace from a string.
 *
 * @param value - The string to get the leading whitespace from.
 * @returns The leading whitespace from the string.
 */
export function getLeadingWhitespace(value: string): string {
	const match = value.match(/^\s+/);

	return match ? match[0] : '';
}

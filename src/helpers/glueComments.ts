import { CommentLine } from '@/data/CommentLine';
import { getLeadingWhitespace } from '@/utils/string';
import { CommentGlueOptions } from './CommentGlueOptions';

/**
 * Converts the given comment lines into a single string that
 * represents a multi-line comment.
 *
 * @param commentLines - The comment lines to glue together.
 * @returns The comment lines glued together.
 */
export function glueComments(commentLines: CommentLine[], options: CommentGlueOptions = {}): string {
	if (commentLines.length === 0) {
		return '';
	}

	const {
		spacesAfterCommentStart = 1,
		useTabsInsteadOfSpaces = false,
		addEmptyLineAfterRawDescription = false,
		removeEmptyLines = false,
	} = options;
	const spaceCharacter = useTabsInsteadOfSpaces ? '\t' : ' ';
	const spaces = spaceCharacter.repeat(spacesAfterCommentStart);
	const firstLine = commentLines[0] as CommentLine;
	const leadingWhitespace = getLeadingWhitespace(firstLine.text);

	if (removeEmptyLines) {
		commentLines = commentLines.filter((commentLine) => getCommentContent(commentLine.text) !== '');
	}

	// Add opening comment
	let multiLineComment = `${leadingWhitespace}/**\n`;

	// Find first non-empty line
	const firstNonEmptyLineIndex = commentLines.findIndex((commentLine) => commentLine.text.trim() !== '');
	const firstEmptyLineContents  = getCommentContent(commentLines[firstNonEmptyLineIndex].text);

	// Add comment lines
	multiLineComment += commentLines
		.map((commentLine, index) => {
			const { text } = commentLine;
			const commentContent = getCommentContent(text);

			const result = `${leadingWhitespace} *${spaces}${commentContent}`;

			if (index === firstNonEmptyLineIndex && addEmptyLineAfterRawDescription && firstEmptyLineContents.startsWith('@')) {
				return `${result}\n${leadingWhitespace} *\n`;
			}

			return result;
		})
		.join('\n');

	// Add closing comment
	multiLineComment += `\n${leadingWhitespace} */`;

	return multiLineComment;
}

/**
 * Gets the content of a comment line.
 *
 * @param commentLine - The comment line to get the content of.
 * @returns The content of the comment line.
 */
function getCommentContent(commentLine: string): string {
	const trimmedComment = commentLine.trim();

	// Remove '///' and trim whitespace
	const commentContent = trimmedComment.slice(3).trim();

	return commentContent;
}

import { CommentLine } from '@/data/CommentLine';

import { glueComments } from './glueComments';
import { CommentGlueOptions } from './CommentGlueOptions';

/**
 * Convert inline comment to block comment in code.
 *
 * @param code - The code to convert.
 * @param options - The options for gluing comments.
 * @returns The code with inline comments converted to block comments.
 */
export function convertInlineCommentToBlock(code: string, options: CommentGlueOptions = {}): string {
	const lines = code.split('\n');
	let inCommentBlock = false;
	const tokens: string[] = [];
	const commentLines: CommentLine[] = [];
	let lineNumber = 0;

	for (const line of lines) {
		lineNumber++;
		const trimmedLine = line.trim();

		// Check if the entire line is a comment
		if (trimmedLine.startsWith('///')) {
			inCommentBlock = true;
			commentLines.push({
				lineNumber,
				text: line,
			});
			continue;
		}

		// Check if the line is a comment
		if (inCommentBlock) {
			inCommentBlock = false;

			const multiLineComment = glueComments(commentLines, options);
			commentLines.length = 0; // Clear the array

			tokens.push(multiLineComment);
		}

		tokens.push(line);
	}

	return tokens.join('\n');
}

/**
 * Represents a comment line.
 */
export type CommentLine = {
	/**
	 * The line number of the comment.
	 */
	lineNumber: number;

	/**
	 * The text of the comment.
	 */
	text: string;

	/**
	 * The file path of the comment.
	 */
	filePath: string;

	/**
	 * The type of comment.
	 */
	type: string;

	/**
	 * The language of the comment.
	 */
	language: string;
};

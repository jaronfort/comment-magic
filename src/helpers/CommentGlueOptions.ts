/**
 * Options for gluing comments.
 */
export type CommentGlueOptions = {
	/**
	 * The number of spaces after the comment start.
	 */
	spacesAfterCommentStart?: number;

	/**
	 * Whether to use tabs instead of spaces.
	 */
	useTabsInsteadOfSpaces?: boolean;

	/**
	 * Whether to add an empty line after the raw description.
	 */
	addEmptyLineAfterRawDescription?: boolean;

	/**
	 * Whether to remove empty lines.
	 */
	removeEmptyLines?: boolean;
};

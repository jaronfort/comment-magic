import { CommentLine } from './CommentLine';

/**
 * Represents a group of comments in a file.
 */
export type CommentGroup = {
	/**
	 * The file path of the comment group.
	 */
	filePath: string;

	/**
	 * The comments in the group.
	 */
	comments: CommentLine[];
};

import { CommentLine } from './CommentLine';

/**
 * Represents a group of comments in a file.
 */
export type CommentToken = {
	/**
	 * The comments in the group.
	 */
	lines: CommentLine[];
};

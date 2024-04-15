import { CommentGroup } from '@/data/CommentGroup';

/**
 * Abstract class for converting comments to different formats.
 */
export abstract class CommentConverter {

	/**
	 * Converts the comments to a string.
	 *
	 * @param comments The comments to convert.
	 * @returns The converted comments.
	 */
	abstract convert(comments: CommentGroup): string;
}

import { CommentLine } from '@/data/CommentLine';

export type CommentProcessData = {
	result: string;
	commentContent: string;
	rawComment: string;
	leadingWhitespace: string;
	commentLine: CommentLine;
	commentLineIndex: number;
	commentLines: CommentLine[];
};

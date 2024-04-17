import { CommentProcessData } from '../CommentProcessData';
import { CommentProcessor } from './CommentProcessor';

export class EmptyLineRemover extends CommentProcessor {
	constructor(
		protected readonly padding: number = 1,
		protected readonly paddingChar: string = ' ',
	) {
		super();
	}

	override process(data: CommentProcessData): string | false {
		const { result, commentContent } = data;

		if (commentContent === '') {
			return false;
		}

		return result;
	}
}

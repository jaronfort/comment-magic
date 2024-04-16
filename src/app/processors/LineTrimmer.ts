import { CommentProcessData } from '../CommentProcessData';
import { CommentProcessor } from './CommentProcessor';

export class LineTrimmer extends CommentProcessor {
	constructor() {
		super();
	}

	override process(data: CommentProcessData): string | false {
		const { result, leadingWhitespace } = data;

		return `${result}${leadingWhitespace}`;
	}
}

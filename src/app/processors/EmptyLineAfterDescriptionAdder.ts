import { CommentProcessData } from '../CommentProcessData';
import { CommentProcessor } from './CommentProcessor';

export class EmptyLineAfterDescriptionAdder extends CommentProcessor {
	constructor() {
		super();
	}

	override process(data: CommentProcessData): string | false { // eslint-disable-line @typescript-eslint/no-unused-vars
		return false;
	}
}

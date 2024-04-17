import { CommentProcessData } from '../CommentProcessData';

export abstract class CommentProcessor {
	constructor() {}

	abstract process(data: CommentProcessData): string | false;
}

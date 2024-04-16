import { CommentProcessData } from '../CommentProcessData';
import { CommentProcessor } from './CommentProcessor';

export class PaddingAdder extends CommentProcessor {
	constructor(
		protected readonly padding: number = 1,
		protected readonly paddingChar: string = ' ',
	) {
		super();
	}

	override process(data: CommentProcessData): string | false {
		const { result } = data;

		const padding = this.paddingChar.repeat(this.padding);

		return `${result}${padding}`;
	}
}

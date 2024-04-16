import { CommentToken } from '@/data/CommentToken';

/**
 * Tokenizes comments from a source file.
 */
export class CommentTokenizer {
	/**
	 * The contents to tokenize.
	 */
	protected contents: string = '';

	/**
	 * A list of tokens found in the contents.
	 */
	protected _tokens: CommentToken[] = [];

	/**
	 * Tokenizes the contents of the file.
	 *
	 * @param contents The contents to tokenize.
	 */
	tokenize(contents: string) {
		this.contents = contents;

		this.tokenizeContents();
	}

	/**
	 * Gets the tokens found in the contents.
	 */
	get tokens(): CommentToken[] {
		return this._tokens;
	}

	/**
	 * Tokenizes the contents of the file.
	 */
	protected tokenizeContents() {
		const lines = this.contents.split('\n');

		this._tokens = [];

		for (const line of lines) {
			const trimmedLine = line.trim();

			if (trimmedLine.startsWith('///')) {
				
			}
		}
	}
}

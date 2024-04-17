import { SupportedFileExtension, SupportedLanguage } from '@/types/languages.types';

export class LanguageMapper {
	/**
	 * Maps a file extension to a language.
	 *
	 * @param {string} extension The file extension to map.
	 * @returns {string} The language associated with the file extension.
	 */
	static mapExtensionToLanguage(extension: SupportedFileExtension): SupportedLanguage {
		switch (extension) {
			case '.ts':
			case '.tsx':
				return 'typescript';
			case '.js':
			case '.jsx':
				return 'javascript';
			case '.c':
			case '.cc':
			case '.cpp':
				return 'c';
			case '.h':
			case '.hh':
			case '.hpp':
				return 'c++';
			default:
				throw new Error(`Unsupported file extension: ${extension}`);
		}
	}

	/**
	 * Maps a language to a file extension.
	 *
	 * @param {string} language The language to map.
	 * @returns {string} The file extension associated with the language.
	 */
	static mapLanguageToExtension(language: SupportedLanguage): SupportedFileExtension[] {
		switch (language) {
			case 'typescript':
				return ['.ts', '.tsx'];
			case 'javascript':
				return ['.js', '.jsx'];
			case 'c':
			case 'c++':
				return ['.h', '.hh', '.hpp', '.c', '.cc', '.cpp'];
			default:
				throw new Error(`Unsupported language: ${language}`);
		}
	}
}

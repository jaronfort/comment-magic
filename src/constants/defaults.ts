import { SupportedFileExtension } from '@/types/languages.types';

/**
 * Default file extensions to search for comments.
 */
export const defaultExtensions: SupportedFileExtension[] = [
	// TypeScript and JavaScript
	'.ts',
	'.tsx',
	'.js',
	'.jsx',

	// C and C++
	'.c',
	'.cc',
	'.cpp',
	'.h',
	'.hh',
	'.hpp',
];

/**
 * Default directory to search for comments.
 */
export const defaultDirectory = '.';

/**
 * The maximum line length for comments.
 */
export const defaultMaxLineLength = 80;

/**
 * The default exclude list.
 */
export const defaultExclude: string[] = [
	'node_modules',
	'.git',
	'.vscode',
	'.idea',
	'out',
	'dist',
	'build',
	'coverage',
	'.next',
	'.nuxt',
	'.cache',
	'.DS_Store',
	'.github',
];

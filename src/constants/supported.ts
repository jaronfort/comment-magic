import { SupportedFileExtension } from '@/types/languages.types';

import { defaultExtensions } from './defaults';

/**
 * All supportted extensions for the tool.
 */
export const supportedExtensions: SupportedFileExtension[] = [
	// Includes TypeScript, JavaScript, C, and C++ extensions
	...defaultExtensions,
];

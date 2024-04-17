
/**
 * Supported languages for the tool.
 */
export type SupportedLanguage = 'typescript' | 'javascript' | 'c' | 'c++';

/**
 * TypeScript file extensions.
 */
export type TypeScriptExtension = '.ts' | '.tsx';

/**
 * JavaScript file extensions.
 */
export type JavaScriptExtension = '.js' | '.jsx';

/**
 * C file extension.
 */
export type CExtension = '.c' | '.cc' | '.cpp';

/**
 * C++ file extension.
 */
export type CPlusPlusExtension = '.h' | '.hh' | '.hpp';

/**
 * C/C++ file extensions.
 */
export type COrCPlusPlusExtension = CExtension | CPlusPlusExtension;

/**
 * Represents a supported file extension.
 */
export type SupportedFileExtension = TypeScriptExtension | JavaScriptExtension | CExtension | CPlusPlusExtension;

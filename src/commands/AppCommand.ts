import { Command } from 'commander';

/**
 * Encapsulates the a command that can be executed by the application.
 */
export abstract class AppCommand {
	/**
	 * Initializes a new instance of the AppCommand class.
	 *
	 * @param {Command} program The program to register the command with.
	 */
	constructor(protected readonly program: Command) {
		this.register(program);
	}

	/**
	 * Registers the command with the program.
	 *
	 * @param {Command} program The program to register the command with.
	 */
	protected abstract register(program: Command): void;
}

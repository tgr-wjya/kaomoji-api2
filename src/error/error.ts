/**
 * Error custom classes
 *
 * @author Tegar
 * @date 2 April 2026
 */

export class KaomojiNotFound extends Error {
	status = 404;

	constructor() {
		super("Kaomoji Not Found.");
	}
}

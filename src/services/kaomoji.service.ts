/**
 * Initializing Kaomoji API Service
 *
 * @author Tegar Wijaya Kusuma
 * @date 1 April 2026
 */

import { KAOMOJI_COLLECTION, type Kaomoji } from "../types";

export class KaomojiService {
	private readonly kaomoji: Kaomoji[] = KAOMOJI_COLLECTION;

	getAll() {
		return this.kaomoji;
	}
}

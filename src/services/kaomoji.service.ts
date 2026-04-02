/**
 * Initializing Kaomoji API Service
 *
 * @author Tegar Wijaya Kusuma
 * @date 1 April 2026
 */

import { KaomojiNotFound } from "../error/error";
import { KAOMOJI_COLLECTION, type Kaomoji } from "../types";

export class KaomojiService {
	private readonly kaomoji: Kaomoji[] = KAOMOJI_COLLECTION;

	getAll() {
		return this.kaomoji;
	}

	getRandom() {
		const randomKaomoji =
			this.kaomoji[Math.floor(Math.random() * this.kaomoji.length)];
		return randomKaomoji;
	}

	getByIndex(id: number) {
		if (id >= this.kaomoji.length || id < 0) {
			throw new KaomojiNotFound();
		}

		return this.kaomoji[id];
	}
}

/**
 * Kaomoji API Routes
 *
 * @author Tegar Wijaya Kusuma
 * @date 1 April 2026
 */

import { Hono } from "hono";
import { KaomojiService } from "../services/kaomoji.service";

export function KaomojiRoutes(service = new KaomojiService()) {
	const KaomojiRouter = new Hono();

	KaomojiRouter.get("/all", (c) => {
		return c.json(service.getAll());
	});

	return KaomojiRouter;
}

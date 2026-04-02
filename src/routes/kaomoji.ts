/**
 * Kaomoji API Routes
 *
 * @author Tegar Wijaya Kusuma
 * @date 1 April 2026
 */

import { Hono } from "hono";
import { KaomojiService } from "../services/kaomoji.service";
import { zValidator } from "@hono/zod-validator";
import { GetKaomojiIdSchema } from "../types";

export function KaomojiRoutes(service = new KaomojiService()) {
	const KaomojiRouter = new Hono();

	KaomojiRouter.get("/all", (c) => {
		return c.json(service.getAll(), 200);
	});

	KaomojiRouter.get("/", (c) => {
		return c.json(service.getRandom(), 200);
	});

	KaomojiRouter.get("/:id", zValidator("param", GetKaomojiIdSchema), (c) => {
		const { id } = c.req.valid("param");
		GetKaomojiIdSchema.safeParse(id);

		return c.json(service.getByIndex(id), 200);
	});

	return KaomojiRouter;
}

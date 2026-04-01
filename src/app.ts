/**
 * Main App
 *
 * @author Tegar Wijaya Kusuma
 * @date 1 April 2026
 */

import { Hono } from "hono";
import { KaomojiRoutes } from "./routes/kaomoji";

const app = new Hono();

app.route("/api/kaomoji", KaomojiRoutes());

export default app;

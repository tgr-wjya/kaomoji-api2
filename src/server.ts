/**
 * Starter to project
 *
 * @author Tegar Wijaya Kusuma
 * @date 1 April 2026
 */

import app from "./app";

Bun.serve({
	port: 3000,
	hostname: "0.0.0.0",
	fetch: app.fetch,
});

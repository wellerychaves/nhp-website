// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	adapter: cloudflare(),
	integrations: [react()],
	output: "server",
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: import.meta.env.PROD && {
				"react-dom/server": "react-dom/server.edge",
			},
		},
	},
});

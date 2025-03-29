import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import type { AstroIntegration } from "astro";
import { defineConfig } from "astro/config";

function setPrerender(): AstroIntegration {
	let isDev = false;
	return {
		name: "set-prerender",
		hooks: {
			"astro:config:setup": ({ command }) => {
				isDev = command === "dev";
			},
			"astro:route:setup": ({ route }) => {
				if (
					(isDev && route.component.endsWith("/site/[...path]/index.astro")) ||
					(isDev && route.component.endsWith("/site/[...path]/edit.astro")) ||
					(isDev && route.component.endsWith("/edit/[...path].astro"))
				) {
					route.prerender = false;
				}
			},
		},
	};
}

const proxy = {
	"/api": {
		target: "http://localhost:8008",
		changeOrigin: true,
		cookieDomainRewrite: "dawdle.space",
		ws: true,
	},
};

// https://astro.build/config
export default defineConfig({
	integrations: [sitemap(), react(), setPrerender()],
	site: "https://dawdle.space",
	compressHTML: true,
	prefetch: true,
	vite: {
		ssr: { noExternal: ["monaco-editor"] },
		server: { proxy },
		preview: { proxy },
		css: { transformer: "lightningcss" },
	},
	trailingSlash: "ignore",
	output: "static",
});

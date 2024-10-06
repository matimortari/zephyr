import { defineConfig } from "vitest/config"

export default defineConfig({
	test: {
		include: ["./tests/**/*.{test,spec}.{js,ts}"],
		exclude: ["node_modules", "tests/e2e", "dist"],
		coverage: {
			provider: "v8",
			include: ["src/**/*"],
			exclude: ["node_modules", "tests/e2e", "tests/test-results"],
		},
	},
})

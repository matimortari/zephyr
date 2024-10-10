import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"

export default defineConfig({
	plugins: [react()],
	test: {
		include: ["./tests/**/*.{test,spec}.{js,ts,jsx,tsx}"],
		exclude: ["node_modules", "tests/e2e", "dist"],
		setupFiles: "./tests/setup.ts",
		globals: true,
		environment: "jsdom",
		css: true,
		coverage: {
			provider: "v8",
			include: ["src/**/*"],
			exclude: ["node_modules", "tests/e2e", "tests/test-results"],
		},
	},
})

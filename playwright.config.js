import { defineConfig } from "@playwright/test"

export default defineConfig({
	testDir: "./tests",
	outputDir: "./tests/test-results",
	use: {
		headless: true,
		screenshot: "only-on-failure",
		video: "retain-on-failure",
	},
	webServer: {
		reuseExistingServer: !process.env.CI,
		command: "npm run dev",
		port: 3000,
		stdout: "ignore",
		stderr: "pipe",
	},
})

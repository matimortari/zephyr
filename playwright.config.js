const config = {
	webServer: {
		command: "npm run start",
		url: "http://127.0.0.1:3000",
		stdout: "ignore",
		stderr: "pipe",
	},
	testDir: "tests",
	outputDir: "tests/test-results",
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,
	fullyParallel: true,
}

export default config

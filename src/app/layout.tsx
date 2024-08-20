import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: "Zephyr 🌤️",
	description: "Next.js Weather App",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				{/* <GlobalContextProvider> */}
				<main>{children}</main>
				{/* </GlobalContextProvider> */}
			</body>
		</html>
	)
}

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GlobalContextProvider } from "../components/GlobalContext"
import "./globals.css"

export const metadata: Metadata = {
	title: "Zephyr 🌤️",
	description: "Next.js Weather App",
}

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={inter.className}>
			<body>
				<GlobalContextProvider>
					<main>{children}</main>
				</GlobalContextProvider>
			</body>
		</html>
	)
}

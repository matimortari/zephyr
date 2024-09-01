import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GlobalContextProvider } from "../components/context/GlobalContext"
import Footer from "../components/Footer"
import TopNav from "../components/TopNav"
import "../styles/globals.css"

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
					<Analytics />
					<TopNav />
					<main>{children}</main>
					<Footer />
				</GlobalContextProvider>
			</body>
		</html>
	)
}

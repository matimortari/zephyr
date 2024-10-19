import { GlobalContextProvider } from "@/src/components/context/GlobalContext"
import Footer from "@/src/components/Footer"
import Navbar from "@/src/components/Navbar"
import "@/src/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Zephyr 🌤️",
	description: "A clean, elegant weather app!",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<GlobalContextProvider>
					<Navbar />
					{children}
					<Footer />
				</GlobalContextProvider>
			</body>
		</html>
	)
}

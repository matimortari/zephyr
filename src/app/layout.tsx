import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GlobalContextProvider } from "../components/context/GlobalContext"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../styles/globals.css"

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

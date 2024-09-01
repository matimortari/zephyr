"use client"

import { Icon } from "@iconify/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import SearchDialog from "./SearchDialog"
import { Button } from "./ui/button"

export default function Navbar() {
	const router = useRouter()
	const [theme, setTheme] = useState("dark")

	const toggleTheme = () => setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))

	useEffect(() => {
		document.documentElement.classList.toggle("light", theme === "light")
	}, [theme])

	return (
		<nav className="mx-4 flex items-center justify-between py-2 lg:mx-8 xl:mx-24">
			<div className="flex items-center gap-6"></div>

			<div className="flex items-center gap-2">
				<SearchDialog />
				<Button onClick={toggleTheme} className="button flex h-10 w-10 items-center justify-center">
					<Icon
						icon={theme === "light" ? "material-symbols:light-mode-rounded" : "material-symbols:dark-mode-rounded"}
					/>
				</Button>
				<Button
					onClick={() => {
						router.push("https://github.com/matimortari/zephyr")
					}}
					className="button"
				>
					<Icon icon="simple-icons:github" />
				</Button>
			</div>
		</nav>
	)
}

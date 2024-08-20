"use client"

import { Icon } from "@iconify/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import SearchDialog from "./SearchDialog"
import { Button } from "./ui/button"

function ThemeButton() {
	const [theme, setTheme] = useState("dark")

	const toggleTheme = () => setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))

	useEffect(() => {
		document.documentElement.classList.toggle("light", theme === "light")
	}, [theme])

	return (
		<Button onClick={toggleTheme} className="button shadow-lg">
			<Icon icon={theme === "dark" ? "material-symbols:light-mode-rounded" : "material-symbols:dark-mode-rounded"} />
		</Button>
	)
}

export default function TopNav() {
	const router = useRouter()

	return (
		<div className="flex w-full items-center justify-between py-4">
			<div className="left" />
			<div className="search-container flex sm:w-fit">
				<div className="button-group flex items-center gap-1">
					<SearchDialog />
					<ThemeButton />
					<Button
						onClick={() => {
							router.push("https://github.com/w11dcard/zephyr")
						}}
						className="button shadow-lg"
					>
						<Icon icon="simple-icons:github" />
					</Button>
				</div>
			</div>
		</div>
	)
}

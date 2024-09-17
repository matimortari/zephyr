import { Icon } from "@iconify/react"
import Link from "next/link"

export default function Footer() {
	return (
		<footer className="flex items-center justify-between p-4 pt-12 text-muted-foreground">
			<div className="order-3 flex items-center">
				<Link href="https://github.com/matimortari" target="_blank" rel="noopener noreferrer">
					<Icon icon="simple-icons:github" className="icon h-6 w-6" />
				</Link>
				<Link
					href="https://www.linkedin.com/in/matheus-mortari-19rt"
					target="_blank"
					rel="noopener noreferrer"
					className="ml-2 md:ml-4"
				>
					<Icon icon="simple-icons:linkedin" className="icon h-6 w-6" />
				</Link>
			</div>

			<div className="order-2 flex flex-col justify-center gap-1 sm:w-3/5 md:w-full md:flex-row">
				<p className="text-sm font-light">© 2024 Matheus Mortari. All rights reserved. </p>
				<p className="text-sm font-light">
					Powered by{" "}
					<a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer" className="text-accent">
						Open-Meteo API.
					</a>
				</p>
			</div>
		</footer>
	)
}

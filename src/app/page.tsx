"use client"

import TopNav from "../components/TopNav"

export default function Home() {
	return (
		<main className="m-auto mx-4 lg:mx-8 xl:mx-24 2xl:mx-64">
			<TopNav />

			<div className="flex flex-col gap-4 pb-4 md:flex-row">
				<div className="flex w-full flex-col">
					<div className="sm-2:col-span-2 col-span-full grid h-full gap-4 lg:grid-cols-3 xl:grid-cols-4">
						Hello Zephyr!
					</div>
				</div>
			</div>

			<footer className="flex justify-center p-10">
				<p className="flex items-center gap-2 text-sm">
					Made by
					<a href="https://github.com/w11dcard" target="_blank" className="font-bold">
						w11dcard.
					</a>
				</p>
			</footer>
		</main>
	)
}

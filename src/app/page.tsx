"use client"

import DailyForecast from "../components/DailyForecast"
import FeelsLike from "../components/FeelsLike"
import FiveDayForecast from "../components/FiveDayForecast"
import Humidity from "../components/Humidity"
import Precipitation from "../components/Precipitation"
import Pressure from "../components/Pressure"
import Sunset from "../components/Sunset"
import Temperature from "../components/Temperature"
import TopNav from "../components/TopNav"
import UvIndex from "../components/UvIndex"
import Visibility from "../components/Visibility"
import Wind from "../components/Wind"

export default function Home() {
	return (
		<main className="m-auto mx-4 lg:mx-8 xl:mx-24 2xl:mx-64">
			<TopNav />

			<div className="flex flex-col gap-4 pb-4 md:flex-row">
				<div className="flex w-full min-w-72 flex-col gap-4 md:w-96">
					<Temperature />
					<FiveDayForecast />
				</div>

				<div className="flex w-full flex-col">
					<div className="sm-2:col-span-2 col-span-full grid h-full gap-4 lg:grid-cols-3 xl:grid-cols-4">
						<FeelsLike />
						<DailyForecast />
						<Precipitation />
						<Wind />
						<Humidity />
						<Pressure />
						<Sunset />
						<UvIndex />
						<Visibility />
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

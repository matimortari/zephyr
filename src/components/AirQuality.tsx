"use client"

import { Progress } from "@radix-ui/react-progress"
import { Gauge } from "lucide-react"
import { useGlobalContext } from "./GlobalContext"
import { Skeleton } from "./ui/skeleton"

export default function AirQuality() {
	const { forecast } = useGlobalContext()

	if (!forecast || !forecast.hourly || !forecast.hourly.time || !forecast.hourly.temperature_2m) {
		return <Skeleton className="h-48 w-full" />
	}

	const { time, temperature_2m } = forecast.hourly

	// Extract every 4th hour from the forecast data
	const fourHourForecast = time.reduce((acc, timestamp, index) => {
		if (index % 4 === 0) {
			acc.push({
				time: timestamp,
				temperature: temperature_2m[index],
			})
		}
		return acc
	}, [])

	return (
		<section className="col-span-full flex h-48 flex-col gap-5 p-5 md:col-span-2 xl:col-span-2">
			<h2 className="flex items-center gap-2 font-medium">
				<Gauge size={20} /> Air Quality
			</h2>

			<div className="mt-10 flex flex-col justify-center gap-6">
				<Progress className="progress" max={100} />
				<p className="text-sm">Air quality is {"unknown"}.</p>
			</div>
		</section>
	)
}

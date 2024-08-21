"use client"

import { Gauge } from "lucide-react"
import { useGlobalContext } from "./GlobalContext"
import { Progress } from "./ui/progress"
import { Skeleton } from "./ui/skeleton"

export default function AirQuality() {
	const { airQuality } = useGlobalContext()

	if (!airQuality || !airQuality.current) {
		return <Skeleton className="col-span-2 h-48 w-full md:col-span-full" />
	}

	const usAqi = airQuality.current.us_aqi

	return (
		<section className="col-span-full flex h-48 flex-col p-4 md:col-span-2 xl:col-span-2">
			<h2 className="flex items-center gap-2 font-medium">
				<Gauge size={20} /> Air Quality
			</h2>

			<div className="my-10 flex flex-col justify-center">
				<Progress className="progress mb-4" value={usAqi ?? 0} max={300} />
				<p className="text-sm">Air Quality Index: {usAqi !== null && usAqi !== undefined ? usAqi : "N/A"}</p>
				<p className="text-sm">{airQualityIndexToDescription(usAqi)}</p>
			</div>
		</section>
	)
}

function airQualityIndexToDescription(index) {
	if (index === undefined || index === null) return "unknown"

	const categories = [
		{ max: 50, description: "Air quality is good." },
		{ max: 100, description: "Air quality is moderate." },
		{ max: 150, description: "Unhealthy for sensitive groups." },
		{ max: 200, description: "Unhealthy air quality." },
		{ max: 300, description: "Very Unhealthy air quality." },
		{ max: Infinity, description: "Hazardous air quality." },
	]

	const rating = categories.find((category) => index <= category.max)
	return rating ? rating.description : "unknown"
}

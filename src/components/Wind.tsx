"use client"

import { WindIcon } from "lucide-react"
import { useGlobalContext } from "./GlobalContext"
import { Skeleton } from "./ui/skeleton"

export default function Wind() {
	const { forecast } = useGlobalContext()

	if (
		!forecast ||
		!forecast.current ||
		forecast.current.wind_speed_10m === undefined ||
		forecast.current.wind_direction_10m === undefined
	) {
		return <Skeleton className="h-48 w-full" />
	}

	const { wind_speed_10m: windSpeed, wind_direction_10m: windDirection } = forecast.current
	const roundedWindSpeed = Math.round(windSpeed)
	const roundedWindDirection = Math.round(windDirection)

	return (
		<section className="flex h-48 flex-col gap-5 p-5">
			<h2 className="flex items-center gap-2 font-medium">
				<WindIcon size={25} /> Wind
			</h2>

			<div className="my-2 flex flex-col">
				<p className="font-medium">Wind Speed:</p>
				<p className="mt-2 text-2xl">{roundedWindSpeed} km/h</p>
				<p className="font-medium">Wind Direction:</p>
				<p className="mt-2 text-2xl">{roundedWindDirection}°</p>
			</div>
		</section>
	)
}

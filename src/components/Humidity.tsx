"use client"

import { humidityRating } from "@/src/lib/helperRatings"
import { Droplets } from "lucide-react"
import { useGlobalContext } from "./GlobalContext"
import { Skeleton } from "./ui/skeleton"

export default function Humidity() {
	const { forecast } = useGlobalContext()

	if (!forecast || !forecast?.current || !forecast?.current?.relative_humidity_2m) {
		return <Skeleton className="h-h-48 w-full" />
	}

	const { relative_humidity_2m } = forecast.current

	return (
		<section className="flex h-48 flex-col gap-5 p-5">
			<h2 className="flex items-center gap-2 font-medium">
				<Droplets size={20} /> Humidity
			</h2>

			<p className="mt-4 text-2xl">{relative_humidity_2m}%</p>
			<p className="text-sm">{humidityRating(relative_humidity_2m)}</p>
		</section>
	)
}

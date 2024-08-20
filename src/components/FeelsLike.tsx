"use client"

import { feelsLikeRating } from "@/src/lib/helperRatings"
import { Thermometer } from "lucide-react"
import { useGlobalContext } from "./GlobalContext"
import { Skeleton } from "./ui/skeleton"

export default function FeelsLike() {
	const { forecast } = useGlobalContext()

	if (!forecast || !forecast?.current || !forecast?.current?.apparent_temperature) {
		return <Skeleton className="h-48 w-full" />
	}

	const { apparent_temperature, temp_min, temp_max } = forecast.current
	const feelsLikeDescription = feelsLikeRating(apparent_temperature, temp_min, temp_max)

	return (
		<section className="flex h-48 flex-col gap-5 p-5">
			<h2 className="flex items-center gap-2 font-medium">
				<Thermometer size={20} /> Feels Like
			</h2>

			<p className="mt-4 text-2xl">{apparent_temperature}°</p>
			<p className="text-sm">{feelsLikeDescription}</p>
		</section>
	)
}

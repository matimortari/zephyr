import { feelsLikeRating } from "@/src/lib/weatherRatings"
import { Thermometer } from "lucide-react"
import { useGlobalContext } from "./GlobalContext"
import { Skeleton } from "./ui/skeleton"

export default function FeelsLike() {
	const { forecast } = useGlobalContext()

	if (!forecast?.current) {
		return <Skeleton className="h-48" />
	}

	const { apparent_temperature, temperature_2m } = forecast.current

	const feelsLike = Math.round(apparent_temperature)
	const currentTemp = Math.round(temperature_2m)
	const feelsLikeDescription = feelsLikeRating(feelsLike, currentTemp)

	return (
		<section className="flex h-48 flex-col p-4">
			<h2 className="flex items-center gap-2 font-medium">
				<Thermometer size={25} /> Feels Like
			</h2>

			<div className="my-4 flex flex-col gap-4">
				<p className="text-2xl font-medium">{feelsLike}°</p>
				<p className="w-36 text-sm">{feelsLikeDescription}</p>
			</div>
		</section>
	)
}

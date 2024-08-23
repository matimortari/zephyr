import { WindIcon } from "lucide-react"
import { useGlobalContext } from "./GlobalContext"
import { Skeleton } from "./ui/skeleton"

export default function Wind() {
	const { forecast } = useGlobalContext()

	if (!forecast || !forecast?.current) {
		return <Skeleton className="h-48 w-full" />
	}

	const { wind_speed_10m: windSpeed, wind_direction_10m: windDirection } = forecast.current
	const roundedWindSpeed = Math.round(windSpeed)
	const roundedWindDirection = Math.round(windDirection)

	return (
		<section className="flex h-48 flex-col p-4">
			<h2 className="flex items-center gap-2 font-medium">
				<WindIcon size={25} /> Wind
			</h2>

			<div className="my-4 flex flex-col gap-1">
				<p className="text-sm font-medium">Wind Speed:</p>
				<p className="text-lg">{roundedWindSpeed} km/h</p>
				<p className="text-sm font-medium">Wind Direction:</p>
				<p className="text-lg">{roundedWindDirection}°</p>
			</div>
		</section>
	)
}

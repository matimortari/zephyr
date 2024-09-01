import { WindIcon } from "lucide-react"
import { useGlobalContext } from "./context/GlobalContext"
import { Skeleton } from "./ui/skeleton"

export default function Wind() {
	const { forecast } = useGlobalContext()

	if (!forecast?.current) {
		return <Skeleton className="h-48" />
	}

	const { wind_speed_10m, wind_direction_10m } = forecast.current

	const windSpeed = Math.round(wind_speed_10m)
	const windDirection = Math.round(wind_direction_10m)

	return (
		<section className="flex h-48 flex-col p-4">
			<h2 className="flex items-center gap-2 font-medium">
				<WindIcon size={25} className="icon" /> Wind
			</h2>

			<div className="my-4 flex flex-col gap-1">
				<p className="text-sm font-medium">Wind Speed:</p>
				<p className="text-lg">{windSpeed} km/h</p>
				<p className="text-sm font-medium">Wind Direction:</p>
				<p className="text-lg">{windDirection}°</p>
			</div>
		</section>
	)
}

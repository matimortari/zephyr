import { WindIcon } from "lucide-react"
import { useGlobalContext } from "./GlobalContext"
import { Skeleton } from "./ui/skeleton"

export default function Wind() {
	const { forecast } = useGlobalContext()

	if (!forecast || !forecast?.current || !forecast?.current?.wind_speed_10m || !forecast?.current?.wind_direction_10m) {
		return <Skeleton className="h-48 w-full" />
	}

	const windSpeed = forecast.current.wind_speed_10m
	const windDirection = forecast.current.wind_direction_10m

	return (
		<section className="flex h-48 flex-col gap-5 p-5">
			<h2 className="flex items-center gap-2 font-medium">
				<WindIcon size={25} /> Wind
			</h2>

			<div className="my-2 flex flex-col">
				<p className="font-medium">Wind Speed:</p>
				<p className="mt-2 text-2xl">{windSpeed} km/h</p>
				<p className="font-medium">Wind Direction:</p>
				<p className="mt-2 text-2xl">{windDirection}°</p>
			</div>
		</section>
	)
}

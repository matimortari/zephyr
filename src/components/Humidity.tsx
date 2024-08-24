import { humidityRating } from "@/src/lib/weatherRatings"
import { Droplets } from "lucide-react"
import { useGlobalContext } from "./GlobalContext"
import { Skeleton } from "./ui/skeleton"

export default function Humidity() {
	const { forecast } = useGlobalContext()

	if (
		!forecast ||
		!forecast?.current ||
		!forecast?.current.relative_humidity_2m ||
		!forecast?.current.dew_point_2m ||
		!forecast?.current.surface_pressure
	) {
		return <Skeleton className="h-48 w-full" />
	}

	const { relative_humidity_2m, dew_point_2m, surface_pressure } = forecast.current

	return (
		<section className="flex h-48 flex-col p-4">
			<h2 className="flex items-center gap-2 font-medium">
				<Droplets size={25} /> Humidity
			</h2>

			<div className="my-4 flex flex-col gap-2">
				<p className="text-2xl">{relative_humidity_2m}%</p>
				<p className="text-sm">{humidityRating(relative_humidity_2m)}</p>

				<div className="flex flex-col">
					<div className="flex flex-row">
						<span className="text-sm font-medium">Dew Point:</span>
						<span className="ml-1 text-sm font-normal">{Math.round(dew_point_2m)}°</span>
					</div>
					<div className="flex flex-row">
						<span className="text-sm font-medium">Pressure:</span>
						<span className="ml-1 text-sm font-normal">{Math.round(surface_pressure)} hPa</span>
					</div>
				</div>
			</div>
		</section>
	)
}

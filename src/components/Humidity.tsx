import { humidityRating } from "@/src/lib/weatherRatings"
import { Droplets } from "lucide-react"
import { useGlobalContext } from "./GlobalContext"
import { Skeleton } from "./ui/skeleton"

export default function Humidity() {
	const { forecast } = useGlobalContext()

	if (!forecast?.current) {
		return <Skeleton className="h-48" />
	}

	const { relative_humidity_2m, surface_pressure, dew_point_2m } = forecast.current

	const pressure = Math.round(surface_pressure)
	const dewPoint = Math.round(dew_point_2m)
	const humidityDescription = humidityRating(relative_humidity_2m)

	return (
		<section className="flex h-48 flex-col p-4">
			<h2 className="flex items-center gap-2 text-lg font-medium">
				<Droplets size={25} className="icon" /> Humidity
			</h2>

			<div className="my-4 flex flex-col gap-2">
				<p className="text-xl font-medium">{relative_humidity_2m}%</p>
				<p className="text-sm">{humidityDescription}</p>

				<div className="flex flex-col">
					<div className="flex flex-row">
						<span className="text-sm font-medium">Dew Point:</span>
						<span className="ml-1 text-sm font-normal">{dewPoint}°</span>
					</div>
					<div className="flex flex-row">
						<span className="text-sm font-medium">Pressure:</span>
						<span className="ml-1 text-sm font-normal">{pressure} hPa</span>
					</div>
				</div>
			</div>
		</section>
	)
}

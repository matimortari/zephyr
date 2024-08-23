import { humidityRating } from "@/src/lib/weatherRatings"
import { Droplets } from "lucide-react"
import { useGlobalContext } from "./GlobalContext"
import { Skeleton } from "./ui/skeleton"

export default function Humidity() {
	const { forecast } = useGlobalContext()

	if (!forecast || !forecast?.current || !forecast?.current.relative_humidity_2m || !forecast?.current.dew_point_2m) {
		return <Skeleton className="h-h-48 w-full" />
	}

	const { relative_humidity_2m, dew_point_2m } = forecast.current

	return (
		<section className="flex h-48 flex-col p-4">
			<h2 className="flex items-center gap-2 font-medium">
				<Droplets size={25} /> Humidity
			</h2>

			<div className="my-4 flex flex-col gap-4">
				<p className="text-2xl">{relative_humidity_2m}%</p>
				<p className="text-sm">{humidityRating(relative_humidity_2m)}</p>
				<div className="flex flex-row">
					<span className="text-base font-medium">Dew Point:</span>
					<span className="ml-1 text-base font-normal">{Math.round(dew_point_2m)}°</span>
				</div>
			</div>
		</section>
	)
}

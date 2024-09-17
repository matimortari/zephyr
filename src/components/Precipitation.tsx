import { CloudRain } from "lucide-react"
import { precipitationRating } from "../lib/weatherRatings"
import { useGlobalContext } from "./context/GlobalContext"
import { Skeleton } from "./ui/skeleton"

export default function Precipitation() {
	const { forecast } = useGlobalContext()

	if (!forecast?.current) {
		return <Skeleton className="h-48" />
	}

	const { precipitation, rain, snowfall } = forecast.current

	const precipitationDescription = precipitationRating(precipitation)

	return (
		<section className="flex h-48 flex-col p-4">
			<h2 className="flex items-center gap-2 text-lg font-medium">
				<CloudRain size={25} className="icon" /> Precipitation
			</h2>

			<div className="my-4 flex flex-col gap-2">
				<p className="text-xl font-medium">{precipitation} mm</p>
				<p className="text-sm">{precipitationDescription}</p>

				<div className="flex flex-col">
					<div className="flex flex-row">
						<p className="text-sm font-medium">Rain:</p>
						<p className="ml-1 text-sm font-normal">{rain} mm</p>
					</div>

					<div className="flex flex-row">
						<p className="text-sm font-medium">Snowfall:</p>
						<p className="ml-1 text-sm font-normal">{snowfall} mm</p>
					</div>
				</div>
			</div>
		</section>
	)
}

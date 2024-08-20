import { CloudRain } from "lucide-react"
import { useGlobalContext } from "./GlobalContext"
import { Skeleton } from "./ui/skeleton"

export default function Precipitation() {
	const { forecast } = useGlobalContext()

	if (!forecast || !forecast?.current) {
		return <Skeleton className="h-h-48 w-full" />
	}

	const precipitation = forecast.current.precipitation
	const rain = forecast.current.rain
	const snowfall = forecast.current.snowfall

	return (
		<section className="flex h-48 flex-col gap-4 p-4">
			<h2 className="flex items-center gap-2 font-medium">
				<CloudRain size={25} /> Precipitation
			</h2>

			<div className="my-2 flex flex-col gap-2">
				<p className="text-sm">Precipitation: {precipitation} mm</p>
				<p className="text-sm">Rain: {rain} mm</p>
				<p className="text-sm">Snowfall: {snowfall} cm</p>
			</div>
		</section>
	)
}

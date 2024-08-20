import { CloudRain } from "lucide-react"
import { useGlobalContext } from "./GlobalContext"
import { Skeleton } from "./ui/skeleton"

export default function Precipitation() {
	const { forecast } = useGlobalContext()

	if (!forecast || !forecast?.current) {
		return <Skeleton className="h-h-48 w-full" />
	}

	const rain = forecast.current.rain
	const snowfall = forecast.current.snowfall

	return (
		<section className="flex h-48 flex-col p-4">
			<h2 className="flex items-center gap-2 font-medium">
				<CloudRain size={25} /> Precipitation
			</h2>

			<div className="my-4 flex flex-col gap-1">
				<p className="text-base font-medium">Rain:</p>
				<p className="text-lg">{rain} mm</p>
				<p className="text-base font-medium">Snowfall:</p>
				<p className="text-lg">{snowfall} mm</p>
			</div>
		</section>
	)
}

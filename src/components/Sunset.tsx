import { SunsetIcon } from "lucide-react"
import moment from "moment-timezone"
import { useGlobalContext } from "./GlobalContext"
import { Skeleton } from "./ui/skeleton"

export default function Sunset() {
	const { forecast } = useGlobalContext()

	if (!forecast || !forecast.daily || !forecast.daily.sunset || !forecast.daily.sunrise) {
		return <Skeleton className="h-48 w-full" />
	}

	const sunsetTime = moment(forecast.daily.sunset[0]).tz(forecast.timezone).format("HH:mm")
	const sunriseTime = moment(forecast.daily.sunrise[0]).tz(forecast.timezone).format("HH:mm")

	return (
		<section className="flex h-48 flex-col p-4">
			<h2 className="flex items-center gap-2 font-medium">
				<SunsetIcon size={25} /> Sunset & Sunrise
			</h2>

			<div className="mt-4 flex flex-col gap-1">
				<p className="text-sm font-medium">Sunset at:</p>
				<p className="text-lg">{sunsetTime}</p>
				<p className="text-sm font-medium">Sunrise at:</p>
				<p className="text-lg">{sunriseTime}</p>
			</div>
		</section>
	)
}

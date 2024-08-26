import { SunsetIcon } from "lucide-react"
import moment from "moment-timezone"
import { useGlobalContext } from "./GlobalContext"
import { Skeleton } from "./ui/skeleton"

export default function Sunset() {
	const { forecast } = useGlobalContext()

	if (!forecast?.daily || !forecast?.timezone) {
		return <Skeleton className="h-48" />
	}

	const { sunrise, sunset } = forecast.daily
	const { timezone } = forecast

	const sunsetTime = sunset?.[0] ? moment(sunset[0]).tz(timezone).format("HH:mm") : "N/A"
	const sunriseTime = sunrise?.[0] ? moment(sunrise[0]).tz(timezone).format("HH:mm") : "N/A"

	return (
		<section className="flex h-48 flex-col p-4">
			<h2 className="flex items-center gap-2 font-medium">
				<SunsetIcon size={25} className="icon" /> Sunset
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

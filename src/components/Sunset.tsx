import { SunsetIcon } from "lucide-react"
import moment from "moment-timezone"
import { useGlobalContext } from "./GlobalContext"
import { Skeleton } from "./ui/skeleton"

export default function Sunset() {
	const { forecast } = useGlobalContext()

	if (!forecast || !forecast?.daily || !forecast?.daily?.sunset) {
		return <Skeleton className="h-48 w-full" />
	}

	const sunsetTime = moment(forecast.daily.sunset[0]).tz(forecast.timezone).format("hh:mm A")

	return (
		<section className="flex h-48 flex-col gap-5 p-5">
			<h2 className="flex items-center gap-2 font-medium">
				<SunsetIcon size={25} /> Sunset
			</h2>

			<div className="my-2 flex flex-col">
				<p className="mt-4 text-2xl">Sunset at {sunsetTime}</p>
			</div>
		</section>
	)
}

import { pressureRating } from "@/src/lib/weatherRatings"
import { GaugeCircle } from "lucide-react"
import { useGlobalContext } from "./GlobalContext"
import { Skeleton } from "./ui/skeleton"

export default function Pressure() {
	const { forecast } = useGlobalContext()

	if (!forecast || !forecast?.current || !forecast?.current.surface_pressure) {
		return <Skeleton className="h-48 w-full" />
	}

	const { surface_pressure } = forecast.current

	const roundedPressure = Math.round(surface_pressure)

	return (
		<section className="flex h-48 flex-col p-4">
			<h2 className="flex items-center gap-2 font-medium">
				<GaugeCircle size={25} /> Pressure
			</h2>

			<div className="my-4 flex flex-col gap-4">
				<p className="text-2xl">
					{roundedPressure} <span className="text-base">hPa</span>
				</p>
				<p className="w-36 text-sm">{pressureRating(roundedPressure)}</p>
			</div>
		</section>
	)
}

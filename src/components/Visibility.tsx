import { Eye } from "lucide-react"
import { visibilityRating } from "../lib/weatherRatings"
import { useGlobalContext } from "./GlobalContext"
import { Skeleton } from "./ui/skeleton"

export default function Visibility() {
	const { forecast } = useGlobalContext()

	if (!forecast || !forecast.hourly || !forecast.hourly.visibility) {
		return <Skeleton className="h-48" />
	}

	const visibility = forecast.hourly.visibility[0]

	const visibilityInKm = Math.round(visibility / 1000)

	return (
		<section className="flex h-48 flex-col p-4">
			<h2 className="flex items-center gap-2 font-medium">
				<Eye size={25} /> Visibility
			</h2>

			<div className="my-4 flex flex-col gap-4">
				<p className="text-2xl font-medium">
					{visibilityInKm} <span className="text-base">km</span>
				</p>
				<p className="w-36 text-sm">{visibilityRating(visibility)}</p>
			</div>
		</section>
	)
}

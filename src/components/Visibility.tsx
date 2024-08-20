import { Eye } from "lucide-react"
import { visibilityRating } from "../lib/helperRatings"
import { useGlobalContext } from "./GlobalContext"
import { Skeleton } from "./ui/skeleton"

export default function Visibility() {
	const { forecast } = useGlobalContext()

	if (!forecast || !forecast.hourly || typeof forecast.hourly.visibility === "undefined") {
		return <Skeleton className="h-48 w-full" />
	}

	const visibility = forecast.hourly.visibility

	return (
		<section className="flex h-48 flex-col gap-5 p-5">
			<h2 className="flex items-center gap-2 font-medium">
				<Eye size={25} /> Visibility
			</h2>

			<div className="my-2 flex flex-col">
				<p className="mt-4 text-2xl">{Math.round(visibility / 1000)} km</p>
				<p className="text-sm">{visibilityRating(visibility)}</p>
			</div>
		</section>
	)
}
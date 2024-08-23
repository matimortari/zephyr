import { SunDim } from "lucide-react"
import { uvIndexRating } from "../lib/weatherRatings"
import { useGlobalContext } from "./GlobalContext"
import { Progress } from "./ui/progress"
import { Skeleton } from "./ui/skeleton"

export default function UvIndex() {
	const { forecast } = useGlobalContext()

	if (!forecast || !forecast.daily || !forecast.daily.uv_index_max) {
		return <Skeleton className="h-48 w-full" />
	}

	const uvIndexMax = forecast.daily.uv_index_max[0] || 0

	const { rating, description } = uvIndexRating(uvIndexMax)

	return (
		<section className="flex h-48 flex-col p-4">
			<h2 className="flex items-center gap-2 font-medium">
				<SunDim size={25} /> UV Index
			</h2>

			<div className="my-4 flex flex-col gap-2">
				<p className="text-2xl">
					{uvIndexMax.toFixed(0)} <span className="text-base">({rating})</span>
				</p>
				<Progress className="progress" value={Math.min(uvIndexMax, 10) * 10} max={100} />
				<p className="w-40 text-sm">{description}</p>
			</div>
		</section>
	)
}

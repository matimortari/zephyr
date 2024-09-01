import { SunDim } from "lucide-react"
import { uvIndexRating } from "../lib/weatherRatings"
import { useGlobalContext } from "./context/GlobalContext"
import { Progress } from "./ui/progress"
import { Skeleton } from "./ui/skeleton"

export default function UvIndex() {
	const { forecast } = useGlobalContext()

	if (!forecast?.daily) {
		return <Skeleton className="h-48" />
	}

	const { uv_index_max } = forecast.daily

	const uvIndex = Math.ceil(uv_index_max[0])

	const { rating, description } = uvIndexRating(uvIndex)

	return (
		<section className="col-span-full flex h-48 flex-col p-4 md:col-span-1">
			<h2 className="flex items-center gap-2 font-medium">
				<SunDim size={25} className="icon" /> UV Index
			</h2>

			<div className="my-4 flex flex-col gap-2">
				<p className="text-2xl">
					{uvIndex} <span className="text-base">({rating})</span>
				</p>
				<Progress className="progress" value={Math.min(uvIndex, 10) * 10} max={100} />
				<p className="text-sm">{description}</p>
			</div>
		</section>
	)
}

import { airQualityRating } from "@/src/lib/weatherRatings"
import { Gauge } from "lucide-react"
import { useGlobalContext } from "./context/GlobalContext"
import { Progress } from "./ui/progress"
import { Skeleton } from "./ui/skeleton"

export default function AirQuality() {
	const { airQuality } = useGlobalContext()

	if (!airQuality?.current) {
		return <Skeleton className="w-full" />
	}

	const usAqi = airQuality.current.us_aqi
	const pm10 = airQuality.current.pm10
	const pm2_5 = airQuality.current.pm2_5
	const carbonMonoxide = airQuality.current.carbon_monoxide
	const nitrogenDioxide = airQuality.current.nitrogen_dioxide
	const sulphurDioxide = airQuality.current.sulphur_dioxide
	const ozone = airQuality.current.ozone

	const airQualityDescription = airQualityRating(usAqi)

	return (
		<section className="col-span-2 flex h-auto w-full flex-col p-4 md:h-48 md:flex-row md:gap-10">
			<div className="flex flex-1 flex-col">
				<h2 className="flex items-center gap-2 font-medium">
					<Gauge size={25} className="icon" /> Air Quality
				</h2>

				<div className="my-4 flex flex-col gap-2">
					<p className="text-sm">Air Quality Index: {usAqi}</p>
					<Progress className="progress" value={usAqi} max={300} />
					<p className="text-sm">{airQualityDescription}</p>
				</div>
			</div>

			<div className="flex flex-1 flex-row gap-1">
				<div className="flex flex-1 flex-col gap-1 text-sm font-semibold">
					<p>
						PM10: <span className="font-normal">{pm10 ?? "N/A"} μg/m³</span>
					</p>
					<p>
						PM2.5: <span className="font-normal">{pm2_5 ?? "N/A"} μg/m³</span>
					</p>
					<p>
						Carbon Monoxide: <span className="font-normal">{carbonMonoxide ?? "N/A"} μg/m³</span>
					</p>
				</div>

				<div className="flex flex-1 flex-col gap-1 text-sm font-semibold">
					<p>
						Nitrogen Dioxide: <span className="font-normal">{nitrogenDioxide ?? "N/A"} μg/m³</span>
					</p>
					<p>
						Sulphur Dioxide: <span className="font-normal">{sulphurDioxide ?? "N/A"} μg/m³</span>
					</p>
					<p>
						Ozone: <span className="font-normal">{ozone ?? "N/A"} μg/m³</span>
					</p>
				</div>
			</div>
		</section>
	)
}

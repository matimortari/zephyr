"use client"

import { Gauge } from "lucide-react"
import { useGlobalContext } from "./GlobalContext"
import { Progress } from "./ui/progress"
import { Skeleton } from "./ui/skeleton"

export default function AirQuality() {
	const { airQuality } = useGlobalContext()

	if (!airQuality || !airQuality.current) {
		return <Skeleton className="col-span-2 h-48 w-full md:col-span-full" />
	}

	const usAqi = airQuality.current.us_aqi
	const pm10 = airQuality.current.pm10
	const pm2_5 = airQuality.current.pm2_5
	const co = airQuality.current.carbon_monoxide
	const no2 = airQuality.current.nitrogen_dioxide
	const so2 = airQuality.current.sulphur_dioxide
	const o3 = airQuality.current.ozone

	return (
		<section className="col-span-2 flex h-48 w-full flex-col gap-5 p-5 md:flex-row md:gap-10">
			<div className="flex flex-1 flex-col">
				<h2 className="flex items-center gap-2 font-medium">
					<Gauge size={20} /> Air Quality
				</h2>

				<div className="mt-5 flex flex-col gap-4">
					<Progress className="progress" value={usAqi ?? 0} max={300} />
					<p className="text-sm">Air Quality Index: {usAqi ?? "N/A"}</p>
					<p className="text-sm">{airQualityIndexToDescription(usAqi)}</p>
				</div>
			</div>

			<div className="flex flex-1 flex-col gap-4 md:flex-row">
				<div className="flex flex-1 flex-col gap-2">
					<p className="text-sm font-semibold">
						PM10: <span className="font-normal">{pm10 ?? "N/A"} μg/m³</span>
					</p>
					<p className="text-sm font-semibold">
						PM2.5: <span className="font-normal">{pm2_5 ?? "N/A"} μg/m³</span>
					</p>
					<p className="text-sm font-semibold">
						CO: <span className="font-normal">{co ?? "N/A"} μg/m³</span>
					</p>
				</div>
				<div className="flex flex-1 flex-col gap-2">
					<p className="text-sm font-semibold">
						NO2: <span className="font-normal">{no2 ?? "N/A"} μg/m³</span>
					</p>
					<p className="text-sm font-semibold">
						SO2: <span className="font-normal">{so2 ?? "N/A"} μg/m³</span>
					</p>
					<p className="text-sm font-semibold">
						O3: <span className="font-normal">{o3 ?? "N/A"} μg/m³</span>
					</p>
				</div>
			</div>
		</section>
	)
}

function airQualityIndexToDescription(index) {
	if (index === undefined || index === null) return "unknown"

	const categories = [
		{ max: 50, description: "Air quality is good." },
		{ max: 100, description: "Air quality is moderate" },
		{ max: 150, description: "Unhealthy for Sensitive Groups." },
		{ max: 200, description: "Unhealthy air quality." },
		{ max: 300, description: "Very unhealthy air quality." },
		{ max: Infinity, description: "Hazardous air quality." },
	]

	const rating = categories.find((category) => index <= category.max)
	return rating ? rating.description : "unknown"
}

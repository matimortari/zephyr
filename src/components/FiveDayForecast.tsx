"use client"

import { kelvinToCelsius, unixToDay } from "@/src/lib/helperConversions"
import { CalendarDays } from "lucide-react"
import { useGlobalContext } from "./GlobalContext"
import { Progress } from "./ui/progress"
import { Skeleton } from "./ui/skeleton"

interface DailyData {
	main: { temp_min: number; temp_max: number }
	dt: number
}

interface FiveDayForecast {
	list: DailyData[]
}

const processDailyData = (dailyData: DailyData[]) => {
	let minTemp = Number.MAX_VALUE
	let maxTemp = Number.MIN_VALUE

	dailyData.forEach(({ main: { temp_min, temp_max }, dt }) => {
		minTemp = Math.min(minTemp, temp_min)
		maxTemp = Math.max(maxTemp, temp_max)
	})

	return {
		day: dailyData[0] ? unixToDay(dailyData[0].dt) : "N/A",
		minTemp: kelvinToCelsius(minTemp),
		maxTemp: kelvinToCelsius(maxTemp),
	}
}

export default function FiveDayForecast() {
	const { fiveDayForecast } = useGlobalContext()

	if (!fiveDayForecast) {
		return <Skeleton className="h-[12rem] w-full" />
	}

	const { list = [] } = fiveDayForecast as FiveDayForecast

	if (list.length === 0) {
		return (
			<section className="flex flex-1 flex-col justify-between p-4">
				<h2 className="flex items-center gap-2 font-medium">
					<CalendarDays size={20} /> 5-Day Forecast
				</h2>
				<p>No data available</p>
			</section>
		)
	}

	const dailyForecast = Array.from({ length: 5 }, (_, i) => {
		const dailyData = list.slice(i * 8, (i + 1) * 8)
		return processDailyData(dailyData)
	})

	const maxTemp = Math.max(...dailyForecast.map((d) => d.maxTemp))
	const minTemp = Math.min(...dailyForecast.map((d) => d.minTemp))

	return (
		<section className="flex flex-1 flex-col justify-between p-5">
			<div>
				<h2 className="flex items-center gap-2 font-medium">
					<CalendarDays size={20} /> 5-Day Forecast
				</h2>

				<div className="py-3">
					{dailyForecast.map((day, i) => (
						<div key={i} className="flex flex-col justify-evenly border-b-2 p-2">
							<p className="min-w-14 text-xl">{day.day}</p>
							<p className="flex justify-between text-sm">
								<span>(low)</span>
								<span>(high)</span>
							</p>
							<div className="flex flex-1 items-center justify-between gap-4">
								<p className="font-bold">{day.minTemp}°C</p>
								<Progress
									className="progress h-3 w-full flex-1"
									value={((day.maxTemp - day.minTemp) / (maxTemp - minTemp)) * 100}
								/>
								<p className="font-bold">{day.maxTemp}°C</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

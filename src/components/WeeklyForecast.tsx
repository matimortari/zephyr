"use client"

import { CalendarDays } from "lucide-react"
import { useGlobalContext } from "./GlobalContext"
import { Progress } from "./ui/progress"
import { Skeleton } from "./ui/skeleton"

export default function WeeklyForecast() {
	const { weeklyForecast } = useGlobalContext()

	if (!weeklyForecast) {
		return <Skeleton className="h-[12rem] w-full" />
	}

	const { daily } = weeklyForecast

	if (!daily || daily.time.length === 0) {
		return (
			<section className="flex flex-1 flex-col justify-between p-4">
				<h2 className="flex items-center gap-2 font-medium">
					<CalendarDays size={20} /> Weekly Forecast
				</h2>
				<p>No data available</p>
			</section>
		)
	}

	const { time, temperature_2m_max, temperature_2m_min } = daily

	const dailyForecast = time.map((day, i) => ({
		day: new Date(day).toLocaleDateString("en-US", { weekday: "short" }),
		minTemp: Math.round(temperature_2m_min[i]),
		maxTemp: Math.round(temperature_2m_max[i]),
	}))

	const maxTemp = Math.round(Math.max(...temperature_2m_max))
	const minTemp = Math.round(Math.min(...temperature_2m_min))

	return (
		<section className="flex flex-1 flex-col justify-between p-5">
			<div>
				<h2 className="flex items-center gap-2 font-medium">
					<CalendarDays size={20} /> Weekly Forecast
				</h2>

				<div className="py-3">
					{dailyForecast.map((day, i) => (
						<div key={i} className="flex flex-col justify-evenly border-b-2 border-foreground p-2">
							<p className="min-w-14 text-xl">{day.day}</p>
							<p className="flex justify-between text-sm">
								<span>(low)</span>
								<span>(high)</span>
							</p>
							<div className="flex flex-1 items-center justify-between gap-4">
								<p className="font-bold">{day.minTemp}°C</p>
								<Progress
									className="progress h-3 w-full flex-1"
									value={Math.round(((day.maxTemp - day.minTemp) / (maxTemp - minTemp)) * 100)}
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

import { CalendarDays } from "lucide-react"
import { useGlobalContext } from "./GlobalContext"
import { Progress } from "./ui/progress"
import { Skeleton } from "./ui/skeleton"

export default function ForecastWeekly() {
	const { weeklyForecast } = useGlobalContext()

	if (!weeklyForecast?.daily) {
		return <Skeleton className="h-full w-full" />
	}

	const { time, temperature_2m_max, temperature_2m_min, precipitation_sum } = weeklyForecast.daily

	const dailyForecast = time.map((day, i) => ({
		day: new Date(day).toLocaleDateString("en-US", { weekday: "short" }),
		minTemp: Math.round(temperature_2m_min[i]),
		maxTemp: Math.round(temperature_2m_max[i]),
		precipitation: precipitation_sum[i],
	}))

	const maxTemp = Math.max(...temperature_2m_max)
	const minTemp = Math.min(...temperature_2m_min)
	const tempRange = maxTemp - minTemp

	return (
		<section className="flex flex-1 flex-col justify-between p-4">
			<h2 className="flex items-center gap-2 py-2 font-medium">
				<CalendarDays size={25} className="icon" /> Weekly Forecast
			</h2>

			{dailyForecast.map((day, i) => (
				<div key={i} className="flex flex-col justify-evenly border-b-2 border-muted-foreground p-2">
					<p className="text-lg font-bold">{day.day}</p>
					<p className="flex justify-between text-xs">
						<span>(low)</span>
						<span>(high)</span>
					</p>

					<div className="flex flex-1 items-center justify-between gap-2">
						<p className="font-bold">{day.minTemp}°C</p>

						<div className="relative flex flex-1 items-center">
							<p className="absolute -top-6 w-full text-center text-xs">Precipitation: {day.precipitation} mm</p>

							<Progress
								className="progress w-full"
								value={Math.round(((day.maxTemp - day.minTemp) / tempRange) * 100)}
							/>
						</div>

						<p className="font-bold">{day.maxTemp}°C</p>
					</div>
				</div>
			))}
		</section>
	)
}

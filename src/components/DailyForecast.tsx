import { ClockIcon } from "lucide-react"
import moment from "moment-timezone"
import { getIcon } from "../lib/weatherMappings"
import { useGlobalContext } from "./GlobalContext"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import { Skeleton } from "./ui/skeleton"

export default function DailyForecast() {
	const { forecast } = useGlobalContext()

	if (
		!forecast ||
		!forecast.hourly ||
		!forecast.hourly.time ||
		!forecast.hourly.temperature_2m ||
		!forecast.hourly.precipitation
	) {
		return <Skeleton className="h-48" />
	}

	const { time, temperature_2m, precipitation } = forecast.hourly
	const timezone = forecast.timezone || "UTC"

	// Extract every hour from the forecast data
	const fourHourForecast = time
		.map((timestamp, index) => ({
			time: timestamp,
			temperature: temperature_2m[index],
			precipitation: precipitation[index],
		}))
		.filter((_, index) => index % 1 === 0)

	const { current } = forecast
	const weatherCode = current?.weather_code || 0
	const WeatherIcon = getIcon(weatherCode)

	return (
		<section className="col-span-full flex h-48 flex-col gap-4 p-4 md:col-span-3">
			<h2 className="flex items-center gap-2 font-medium">
				<ClockIcon size={25} aria-hidden="true" /> Daily Forecast
			</h2>

			<div className="flex flex-col justify-center gap-6 overflow-hidden">
				{fourHourForecast.length === 0 ? (
					<h1 className="font-semibold">No data available</h1>
				) : (
					<Carousel className="w-full">
						<CarouselContent>
							{fourHourForecast.map((forecast, index) => (
								<CarouselItem className="flex basis-32 cursor-grab flex-col items-center gap-1" key={forecast.time}>
									<p className="text-muted-foreground">{moment(forecast.time).tz(timezone).format("HH:mm")}</p>
									<WeatherIcon size={25} aria-hidden="true" />
									<p className="font-semibold">{Math.round(forecast.temperature)}°C</p>
									<span className="text-xs text-muted-foreground">Precipitation: </span>
									<p className="text-sm">{forecast.precipitation} mm</p>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				)}
			</div>
		</section>
	)
}

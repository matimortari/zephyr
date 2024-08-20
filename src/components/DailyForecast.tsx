"use client"

import { ClockIcon, CloudDrizzle, CloudRain, CloudSun, Cloudy, Snowflake } from "lucide-react"
import moment from "moment"
import { useGlobalContext } from "./GlobalContext"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import { Skeleton } from "./ui/skeleton"

export default function DailyForecast() {
	const { forecast } = useGlobalContext()

	if (!forecast || !forecast.hourly || !forecast.hourly.time || !forecast.hourly.temperature_2m) {
		return <Skeleton className="h-48 w-full" />
	}

	const { time, temperature_2m } = forecast.hourly

	// Extract every 4th hour from the forecast data
	const fourHourForecast = time.reduce((acc, timestamp, index) => {
		if (index % 4 === 0) {
			acc.push({
				time: timestamp,
				temperature: temperature_2m[index],
			})
		}
		return acc
	}, [])

	const getIcon = (temperature) => {
		if (temperature < 0) {
			return <Snowflake size={25} />
		} else if (temperature >= 0 && temperature < 10) {
			return <Cloudy size={25} />
		} else if (temperature >= 10 && temperature < 20) {
			return <CloudSun size={25} />
		} else if (temperature >= 20 && temperature < 30) {
			return <CloudRain size={25} />
		} else {
			return <CloudDrizzle size={25} />
		}
	}

	return (
		<section className="col-span-full flex h-48 flex-col gap-5 p-5 md:col-span-2 xl:col-span-2">
			<h2 className="flex items-center gap-2 font-medium">
				<ClockIcon size={20} /> Daily Forecast
			</h2>

			<div className="flex flex-col justify-center gap-6 overflow-hidden">
				{fourHourForecast.length === 0 ? (
					<h1 className="font-semibold">No data available</h1>
				) : (
					<Carousel className="w-full">
						<CarouselContent>
							{fourHourForecast.map((forecast, index) => (
								<CarouselItem className="flex basis-32 cursor-grab flex-col items-center gap-2" key={forecast.time}>
									<p className="text-muted-foreground">{moment(forecast.time).format("HH:mm")}</p>
									{getIcon(forecast.temperature)}
									<p className="font-semibold">{forecast.temperature}° C</p>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				)}
			</div>
		</section>
	)
}

"use client"

import moment from "moment-timezone"
import { useEffect, useState } from "react"
import { getDescription, getIcon } from "../lib/weatherMappings"
import { useGlobalContext } from "./GlobalContext"
import { Skeleton } from "./ui/skeleton"

export default function Temperature() {
	const { forecast, activeCityName } = useGlobalContext()

	const [localTime, setLocalTime] = useState<string>("")
	const [currentDate, setCurrentDate] = useState<string>("")

	useEffect(() => {
		if (forecast?.timezone) {
			const interval = setInterval(() => {
				const localMoment = moment().tz(forecast.timezone)
				setLocalTime(localMoment.format("HH:mm"))
				setCurrentDate(localMoment.format("dddd, MMM Do YYYY"))
			}, 1000)
			return () => clearInterval(interval)
		}
	}, [forecast?.timezone])

	if (!forecast?.current || !forecast?.daily) {
		return <Skeleton className="h-full w-full" />
	}

	const { current, daily } = forecast

	const temp = Math.round(current.temperature_2m)
	const minTemp = Math.round(daily.temperature_2m_min[0])
	const maxTemp = Math.round(daily.temperature_2m_max[0])
	const weatherCode = current.weather_code || 0
	const WeatherIcon = getIcon(weatherCode)

	return (
		<section className="flex flex-col justify-between p-4">
			<p className="flex items-center justify-between">
				<span className="font-medium">{currentDate}</span>
				<span className="font-medium">{localTime}</span>
			</p>

			<p className="flex gap-2 font-bold">
				<span>{activeCityName}</span>
			</p>

			<p className="self-center p-4 text-9xl font-bold">{temp}°</p>

			<WeatherIcon size={25} />
			<p className="pt-2 text-lg font-medium">{getDescription(weatherCode)}</p>
			<p className="flex items-center gap-2">
				<span>Low: {minTemp}°</span>
				<span>High: {maxTemp}°</span>
			</p>
		</section>
	)
}

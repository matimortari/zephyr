import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams
		// const lat = searchParams.get("lat")
		// const lon = searchParams.get("lon")
		const lat = 40.7128
		const lon = -74.006

		const response = await fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&forecast_days=1`
		)

		if (!response.ok) {
			throw new Error("Network response was not ok")
		}
		const data = await response.json()

		return NextResponse.json(data)
	} catch (error) {
		console.log("Error fetching forecast data:", error)
		return new NextResponse("Error fetching forecast data", { status: 500 })
	}
}
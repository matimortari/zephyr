import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams
		const lat = searchParams.get("lat")
		const lon = searchParams.get("lon")

		const response = await fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,precipitation,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=auto&forecast_days=1`
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

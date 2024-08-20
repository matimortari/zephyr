import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams
		// const lat = searchParams.get("lat")
		// const lon = searchParams.get("lon")
		const lat = 40.7128
		const lon = -74.006

		const response = await fetch(
			`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,snowfall_sum`
		)

		if (!response.ok) {
			throw new Error("Network response was not ok")
		}

		const data = await response.json()

		return NextResponse.json(data)
	} catch (error) {
		console.log("Error fetching weekly forecast data:", error)
		return new NextResponse("Error fetching weekly forecast data", { status: 500 })
	}
}

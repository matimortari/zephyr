import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams
		const lat = searchParams.get("lat")
		const lon = searchParams.get("lon")

		const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=us_aqi,pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone&forecast_days=1`

		const res = await axios.get(url)

		return NextResponse.json(res.data)
	} catch (error) {
		console.log("Error fetching pollution data ", error)
		return new Response("Error fetching pollution data", { status: 500 })
	}
}

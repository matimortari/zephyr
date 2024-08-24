import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams
		const city = searchParams.get("search")

		const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`

		const res = await axios.get(url)

		return NextResponse.json(res.data)
	} catch (error) {
		console.log("Error fetching geocoded data")
		return new Response("Error fetching geocoded data", { status: 500 })
	}
}

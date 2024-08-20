import { NextResponse } from "next/server"

export const GET = async () => {
	try {
		const data = {
			message: "Hello from the test route!",
		}

		return NextResponse.json(data)
	} catch (error) {
		console.error("Error occurred:", error)
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
	}
}

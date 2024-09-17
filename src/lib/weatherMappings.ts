import { CloudDrizzle, CloudFog, CloudLightning, CloudRain, CloudSun, Snowflake, SunIcon } from "lucide-react"

// Return the appropriate description based on the weather code
export const getDescription = (weatherCode: number): string => {
	const weatherMap: { [key: number]: string } = {
		0: "Clear sky",
		1: "Mainly clear",
		2: "Partly cloudy",
		3: "Overcast",
		45: "Fog",
		48: "Depositing rime fog",
		51: "Drizzle: Light intensity",
		53: "Drizzle: Moderate intensity",
		55: "Drizzle: Dense intensity",
		56: "Freezing drizzle: Light intensity",
		57: "Freezing drizzle: Dense intensity",
		61: "Rain: Slight intensity",
		63: "Rain: Moderate intensity",
		65: "Rain: Heavy intensity",
		66: "Freezing rain: Light intensity",
		67: "Freezing rain: Heavy intensity",
		71: "Snowfall: Slight intensity",
		73: "Snowfall: Moderate intensity",
		75: "Snowfall: Heavy intensity",
		77: "Snow grains",
		80: "Rain showers: Slight intensity",
		81: "Rain showers: Moderate intensity",
		82: "Rain showers: Violent intensity",
		85: "Snow showers: Slight intensity",
		86: "Snow showers: Heavy intensity",
		95: "Thunderstorm: Slight or moderate",
		96: "Thunderstorm with slight hail",
		99: "Thunderstorm with heavy hail",
	}

	return weatherMap[weatherCode] || "Unknown weather code"
}

// Return the appropriate icon based on the weather code
export const getIcon = (weatherCode: number) => {
	switch (weatherCode) {
		case 0:
			return SunIcon // Clear sky
		case 1:
		case 2:
		case 3:
			return CloudSun // Mainly clear, partly cloudy, and overcast
		case 45:
		case 48:
			return CloudFog // Fog and depositing rime fog
		case 51:
		case 53:
		case 55:
			return CloudDrizzle // Drizzle: Light, moderate, and dense intensity
		case 56:
		case 57:
			return CloudDrizzle // Freezing Drizzle: Light and dense intensity
		case 61:
		case 63:
		case 65:
			return CloudRain // Rain: Slight, moderate and heavy intensity
		case 66:
		case 67:
			return CloudRain // Freezing Rain: Light and heavy intensity
		case 71:
		case 73:
		case 75:
			return Snowflake // Snow fall: Slight, moderate, and heavy intensity
		case 77:
			return Snowflake // Snow grains
		case 80:
		case 81:
		case 82:
			return CloudRain // Rain showers: Slight, moderate, and violent intensity
		case 85:
		case 86:
			return Snowflake // Snow showers: Slight and heavy intensity
		case 95:
			return CloudLightning // Thunderstorm: Slight or moderate intensity
		case 96:
		case 99:
			return CloudLightning // Thunderstorm with slight and heavy hail
		default:
			return CloudSun // Default icon
	}
}

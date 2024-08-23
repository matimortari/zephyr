import { CloudDrizzle, CloudFog, CloudLightning, CloudRain, CloudSun, Snowflake, SunIcon } from "lucide-react"

export const getIcon = (weatherCode: number) => {
	switch (weatherCode) {
		case 0:
			return <SunIcon size={25} /> // Clear sky
		case 1:
		case 2:
		case 3:
			return <CloudSun size={25} /> // Mainly clear, partly cloudy, and overcast
		case 45:
		case 48:
			return <CloudFog size={25} /> // Fog and depositing rime fog
		case 51:
		case 53:
		case 55:
			return <CloudDrizzle size={25} /> // Drizzle: Light, moderate, and dense intensity
		case 56:
		case 57:
			return <CloudDrizzle size={25} /> // Freezing Drizzle: Light and dense intensity
		case 61:
		case 63:
		case 65:
			return <CloudRain size={25} /> // Rain: Slight, moderate and heavy intensity
		case 66:
		case 67:
			return <CloudRain size={25} /> // Freezing Rain: Light and heavy intensity
		case 71:
		case 73:
		case 75:
			return <Snowflake size={25} /> // Snow fall: Slight, moderate, and heavy intensity
		case 77:
			return <Snowflake size={25} /> // Snow grains
		case 80:
		case 81:
		case 82:
			return <CloudRain size={25} /> // Rain showers: Slight, moderate, and violent intensity
		case 85:
		case 86:
			return <Snowflake size={25} /> // Snow showers: Slight and heavy intensity
		case 95:
			return <CloudLightning size={25} /> // Thunderstorm: Slight or moderate intensity
		case 96:
		case 99:
			return <CloudLightning size={25} /> // Thunderstorm with slight and heavy hail
		default:
			return <CloudSun size={25} />
	}
}

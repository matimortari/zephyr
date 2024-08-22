import { CloudDrizzle, CloudRain, CloudSun, Cloudy, Snowflake } from "lucide-react"

export const getIcon = (weatherCode: number) => {
	switch (weatherCode) {
		case 0:
			return <CloudSun size={25} />
		case 1:
		case 2:
		case 3:
			return <Cloudy size={25} />
		case 45:
		case 48:
			return <Cloudy size={25} />
		case 51:
		case 53:
		case 55:
			return <CloudDrizzle size={25} />
		case 56:
		case 57:
			return <CloudDrizzle size={25} />
		case 61:
		case 63:
		case 65:
			return <CloudRain size={25} />
		case 66:
		case 67:
			return <CloudRain size={25} />
		case 71:
		case 73:
		case 75:
			return <Snowflake size={25} />
		case 77:
			return <Snowflake size={25} />
		case 80:
		case 81:
		case 82:
			return <CloudRain size={25} />
		case 85:
		case 86:
			return <Snowflake size={25} />
		case 95:
			return <CloudRain size={25} />
		case 96:
		case 99:
			return <CloudRain size={25} />
		default:
			return <CloudSun size={25} />
	}
}

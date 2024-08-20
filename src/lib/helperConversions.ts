import moment from "moment"

export const kelvinToCelsius = (kelvin: number) => {
	return Math.round(kelvin - 273.15)
}

export const unixToTime = (unix: number, timezone: number) => {
	return moment
		.unix(unix)
		.utcOffset(timezone / 60)
		.format("HH:mm")
}

export const unixToDay = (unix: number) => {
	return moment.unix(unix).format("ddd")
}

export const formatNumber = (num: number) => {
	if (num >= 1000000) {
		return (num / 1000000).toFixed(1) + "M"
	} else if (num >= 1000) {
		return (num / 1000).toFixed(1) + "K"
	} else {
		return num
	}
}

export const airQualityRating = [
	{ rating: 10, description: "excellent" },
	{ rating: 30, description: "good" },
	{ rating: 50, description: "moderate" },
	{ rating: 70, description: "poor" },
	{ rating: 90, description: "very poor" },
]

export const uvIndexRating = (uvIndex: number) => {
	if (uvIndex <= 2)
		return {
			text: "low",
			description: "No protection required. You can safely stay outside.",
		}
	else if (uvIndex <= 5)
		return {
			text: "moderate",
			description: "Protection required. Seek shade during midday hours.",
		}
	else if (uvIndex <= 7)
		return {
			text: "high",
			description: "Protection required. Seek shade during midday hours.",
		}
	else
		return {
			text: "extreme",
			description: "Extra protection required. Avoid exposure during midday.",
		}
}

export const feelsLikeRating = (feelsLike: number, minTemp: number, maxTemp: number) => {
	const avgTemp = (minTemp + maxTemp) / 2

	if (feelsLike < avgTemp - 2) return "Feels colder than the actual temperature."
	else if (feelsLike <= avgTemp + 2) return "Feels close to the actual temperature."
	else return "Feels warmer than the actual temperature."
}

export const visibilityRating = (visibility: number) => {
	const visibilityInKm = Math.round(visibility / 1000)

	if (visibilityInKm > 10) return "Excellent: Clear and vast view."
	else if (visibilityInKm > 5) return "Good: Easily navigable."
	else if (visibilityInKm > 2) return "Moderate: Some limitations."
	else return "Poor: Restricted and unclear view."
}

export const pressureRating = (pressure: number) => {
	if (pressure < 1000) return "Very low pressure."
	else if (pressure < 1015) return "Low atmospheric pressure."
	else if (pressure < 1025) return "Normal atmospheric pressure."
	else return "High atmospheric pressure."
}

export const humidityRating = (humidity: number) => {
	if (humidity < 30) return "Low humidity: stay hydrated!"
	else if (humidity < 50) return "Comfortable humidity."
	else if (humidity < 70) return "Moderate humidity."
	else return "High humidity: stay cool!"
}

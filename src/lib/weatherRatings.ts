// Get air quality rating and description based on the AQI value
export const airQualityRating = (aqIndex: number) => {
	if (aqIndex <= 50) {
		return {
			rating: "good",
			description: "Air quality is good.",
		}
	} else if (aqIndex <= 100) {
		return {
			rating: "moderate",
			description: "Air quality is moderate.",
		}
	} else if (aqIndex <= 150) {
		return {
			rating: "unhealthy for sensitive groups",
			description: "Unhealthy for Sensitive Groups.",
		}
	} else if (aqIndex <= 200) {
		return {
			rating: "unhealthy",
			description: "Unhealthy air quality.",
		}
	} else if (aqIndex <= 300) {
		return {
			rating: "very unhealthy",
			description: "Very unhealthy air quality.",
		}
	} else {
		return {
			rating: "hazardous",
			description: "Hazardous air quality.",
		}
	}
}

// Get UV index rating based on the UV index value
export const uvIndexRating = (uvIndex: number) => {
	if (uvIndex <= 2)
		return {
			rating: "low",
			description: "No protection required. You can safely stay outside.",
		}
	else if (uvIndex <= 5)
		return {
			rating: "moderate",
			description: "Protection required. Seek shade during midday hours.",
		}
	else if (uvIndex <= 7)
		return {
			rating: "high",
			description: "Protection required. Seek shade during midday hours.",
		}
	else
		return {
			rating: "extreme",
			description: "Extra protection required. Avoid exposure during midday.",
		}
}

// Get feels like rating based on the apparent temperature
export const feelsLikeRating = (feelsLike: number, minTemp: number, maxTemp: number) => {
	const avgTemp = (minTemp + maxTemp) / 2

	if (feelsLike < avgTemp - 2) return "Feels colder than the actual temperature."
	else if (feelsLike <= avgTemp + 2) return "Feels close to the actual temperature."
	else return "Feels warmer than the actual temperature."
}

// Get humidity rating based on the humidity value
export const humidityRating = (humidity: number) => {
	if (humidity < 30) return "Low humidity: stay hydrated!"
	else if (humidity < 50) return "Comfortable humidity."
	else if (humidity < 70) return "Moderate humidity."
	else return "High humidity: stay cool!"
}

// Get pressure rating based on the pressure value
export const pressureRating = (pressure: number): string => {
	if (pressure < 1000) return "Very low pressure: likely stormy or unsettled weather."
	else if (pressure < 1015) return "Low pressure: generally unstable weather with possible precipitation."
	else if (pressure < 1025) return "Normal pressure: stable weather with fewer changes."
	else return "High pressure: likely clear and stable weather."
}

// Get visibility rating based on the visibility value
export const visibilityRating = (visibility: number) => {
	const visibilityInKm = Math.round(visibility / 1000)

	if (visibilityInKm > 10) return "Excellent: Clear and vast view."
	else if (visibilityInKm > 5) return "Good: Easily navigable."
	else if (visibilityInKm > 2) return "Moderate: Some limitations."
	else return "Poor: Restricted and unclear view."
}

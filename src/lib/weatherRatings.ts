// Get UV index rating based on the UV index value
export const uvIndexRating = (uvIndex: number) => {
	if (uvIndex <= 2)
		return {
			rating: "Low",
			description: "No protection required. You can safely stay outside.",
		}
	else if (uvIndex <= 5)
		return {
			rating: "Moderate",
			description: "Protection required. Seek shade during midday hours.",
		}
	else if (uvIndex <= 7)
		return {
			rating: "High",
			description: "Protection required. Seek shade during midday hours.",
		}
	else
		return {
			rating: "Extreme",
			description: "Extra protection required. Avoid exposure during midday.",
		}
}

// Get air quality rating and description based on the AQI value
export const airQualityRating = (aqIndex: number) => {
	if (aqIndex <= 50) return "Air quality is good. Enjoy the fresh air!"
	else if (aqIndex <= 100) return "Air quality is moderate. Enjoy the fresh air!"
	else if (aqIndex <= 150) return "Unhealthy for Sensitive Groups. Limit outdoor activities."
	else if (aqIndex <= 200) return "Unhealthy air quality. Limit outdoor activities."
	else if (aqIndex <= 300) return "Very unhealthy air quality. Avoid outdoor activities."
	else return "Hazardous air quality. Stay indoors and avoid outdoor activities."
}

// Get feels like rating based on the apparent temperature
export const feelsLikeRating = (feelsLike: number, minTemp: number, maxTemp: number) => {
	const avgTemp = (minTemp + maxTemp) / 2

	if (feelsLike < avgTemp - 2) return "Feels colder than the actual temperature."
	else if (feelsLike <= avgTemp + 2) return "Feels close to the actual temperature."
	else return "Feels warmer than the actual temperature."
}

// Ger precipitation rating based on the precipitation value
export const precipitationRating = (precipitation: number) => {
	if (precipitation < 0.1) return "No precipitation expected."
	else if (precipitation < 1) return "Light precipitation expected."
	else if (precipitation < 5) return "Moderate precipitation expected."
	else return "Heavy precipitation expected."
}

// Get humidity rating based on the humidity value
export const humidityRating = (humidity: number) => {
	if (humidity < 30) return "Low humidity: stay hydrated!"
	else if (humidity < 50) return "Comfortable humidity."
	else if (humidity < 70) return "Moderate humidity."
	else return "High humidity: stay cool!"
}

// Get visibility rating based on the visibility value
export const visibilityRating = (visibility: number) => {
	const visibilityInKm = Math.round(visibility / 1000)

	if (visibilityInKm > 10) return "Excellent: Clear and vast view."
	else if (visibilityInKm > 5) return "Good: Easily navigable."
	else if (visibilityInKm > 2) return "Moderate: Some limitations."
	else return "Poor: Restricted and unclear view."
}

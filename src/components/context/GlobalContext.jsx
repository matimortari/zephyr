"use client"

import { Analytics } from "@vercel/analytics/react"
import axios from "axios"
import { debounce } from "lodash"
import { createContext, useContext, useEffect, useState } from "react"
import { defaultLocations } from "../../lib/defaultLocations"

const GlobalContext = createContext()
const GlobalContextUpdate = createContext()

export const GlobalContextProvider = ({ children }) => {
	const [activeCityCoords, setActiveCityCoords] = useState([40.7128, -74.006])
	const [activeCityName, setActiveCityName] = useState("New York")
	const [inputValue, setInputValue] = useState("")
	const [geoCodedList, setGeoCodedList] = useState(defaultLocations)
	const [forecast, setForecast] = useState({})
	const [weeklyForecast, setWeeklyForecast] = useState({})
	const [airQuality, setAirQuality] = useState(null)

	// Fetch geocoded list
	const fetchGeoCodedList = async (search) => {
		try {
			const res = await axios.get(`/api/geocoded?search=${search}`)
			const locations = res.data.results || []
			setGeoCodedList(locations)
		} catch (error) {
			console.log("Error fetching geocoded list: ", error.message)
		}
	}

	// Fetch forecast
	const fetchForecast = async (latitude, longitude) => {
		try {
			const res = await axios.get(`/api/current?lat=${latitude}&lon=${longitude}`)
			setForecast(res.data)
		} catch (error) {
			console.log("Error fetching forecast data: ", error.message)
		}
	}

	// Fetch weekly forecast
	const fetchWeeklyForecast = async (latitude, longitude) => {
		try {
			const res = await axios.get(`/api/weekly?lat=${latitude}&lon=${longitude}`)
			setWeeklyForecast(res.data)
		} catch (error) {
			console.log("Error fetching weekly forecast data: ", error.message)
		}
	}

	// Fetch air quality data
	const fetchAirQuality = async (latitude, longitude) => {
		try {
			const res = await axios.get(`/api/air?lat=${latitude}&lon=${longitude}`)
			setAirQuality(res.data)
		} catch (error) {
			console.log("Error fetching air quality data: ", error.message)
		}
	}

	// Handle input
	const handleInput = (e) => {
		setInputValue(e.target.value)

		if (e.target.value === "") {
			setGeoCodedList(defaultLocations)
		}
	}

	// Debounce
	useEffect(() => {
		const debouncedFetch = debounce((search) => {
			fetchGeoCodedList(search)
		}, 500)

		if (inputValue) {
			debouncedFetch(inputValue)
		}

		return () => debouncedFetch.cancel()
	}, [inputValue])

	// Fetch data on initial load
	useEffect(() => {
		const [latitude, longitude] = activeCityCoords
		fetchForecast(latitude, longitude)
		fetchWeeklyForecast(latitude, longitude)
		fetchAirQuality(latitude, longitude)
	}, [activeCityCoords])

	const updateCityName = (name) => {
		setActiveCityName(name)
	}

	const getClickedCityCoords = (latitude, longitude, cityName) => {
		setActiveCityCoords([latitude, longitude])
		updateCityName(cityName)
	}

	return (
		<GlobalContext.Provider
			value={{
				forecast,
				weeklyForecast,
				geoCodedList,
				inputValue,
				handleInput,
				setActiveCityCoords,
				airQuality,
				activeCityName,
			}}
		>
			<GlobalContextUpdate.Provider
				value={{
					setActiveCityCoords,
					updateCityName,
					getClickedCityCoords,
				}}
			>
				{children}
				<Analytics />
			</GlobalContextUpdate.Provider>
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate)

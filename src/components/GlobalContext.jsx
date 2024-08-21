"use client"

import axios from "axios"
import { debounce } from "lodash"
import { createContext, useContext, useEffect, useState } from "react"
import { defaultLocations } from "../lib/defaultLocations"

const GlobalContext = createContext()
const GlobalContextUpdate = createContext()

export const GlobalContextProvider = ({ children }) => {
	const [activeCityCoords, setActiveCityCoords] = useState([40.7128, -74.006])
	const [inputValue, setInputValue] = useState("")
	const [geoCodedList, setGeoCodedList] = useState(defaultLocations)
	const [forecast, setForecast] = useState({})
	const [weeklyForecast, setWeeklyForecast] = useState({})
	const [airQuality, setAirQuality] = useState(null)

	// Fetch geocoded list
	const fetchGeoCodedList = async (search) => {
		try {
			const res = await axios.get(`/api/geocoded?search=${search}`)
			setGeoCodedList(res.data)
		} catch (error) {
			console.log("Error fetching geocoded list: ", error.message)
		}
	}

	// Fetch forecast
	const fetchForecast = async (lat, lon) => {
		try {
			const res = await axios.get(`/api/current?lat=${lat}&lon=${lon}`)
			setForecast(res.data)
		} catch (error) {
			console.log("Error fetching forecast data: ", error.message)
		}
	}

	// Fetch weekly forecast
	const fetchWeeklyForecast = async (lat, lon) => {
		try {
			const res = await axios.get(`/api/weekly?lat=${lat}&lon=${lon}`)
			setWeeklyForecast(res.data)
		} catch (error) {
			console.log("Error fetching weekly forecast data: ", error.message)
		}
	}

	// Fetch air quality data
	const fetchAirQuality = async (lat, lon) => {
		try {
			const res = await axios.get(`/api/air?lat=${lat}&lon=${lon}`)
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

	// Fetch data when activeCityCoords changes
	useEffect(() => {
		const [lat, lon] = activeCityCoords
		fetchForecast(lat, lon)
		fetchWeeklyForecast(lat, lon)
		fetchAirQuality(lat, lon)
	}, [activeCityCoords])

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
			}}
		>
			<GlobalContextUpdate.Provider
				value={{
					setActiveCityCoords,
				}}
			>
				{children}
			</GlobalContextUpdate.Provider>
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate)

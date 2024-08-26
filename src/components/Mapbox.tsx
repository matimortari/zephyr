"use client"

import "leaflet/dist/leaflet.css"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { useMap } from "react-leaflet"
import { useGlobalContext } from "./GlobalContext"
import { Skeleton } from "./ui/skeleton"

const MapContainer = dynamic(() => import("react-leaflet").then((module) => module.MapContainer), {
	ssr: false,
}) // Disable server-side rendering for MapContainer

const TileLayer = dynamic(() => import("react-leaflet").then((module) => module.TileLayer), {
	ssr: false,
}) // Disable server-side rendering for TileLayer

function FlyToActiveCity({ activeCityCoords }) {
	const map = useMap()

	useEffect(() => {
		if (activeCityCoords && !isNaN(activeCityCoords.latitude) && !isNaN(activeCityCoords.longitude)) {
			const zoomLev = 13
			const flyToOptions = {
				duration: 1.5,
			}

			map.flyTo([activeCityCoords.latitude, activeCityCoords.longitude], zoomLev, flyToOptions)
		}
	}, [activeCityCoords, map])

	return null
}

export default function Mapbox() {
	const { forecast } = useGlobalContext()
	const [mapLoaded, setMapLoaded] = useState(false)

	if (!forecast || !forecast.latitude || !forecast.longitude) {
		return <Skeleton className="h-full w-full" />
	}

	const activeCityCoords = { latitude: forecast.latitude, longitude: forecast.longitude }

	const handleMapLoaded = () => {
		setMapLoaded(true)
	}

	return (
		<section className="relative flex-1 basis-[50%]">
			{!mapLoaded && <Skeleton className="absolute left-0 top-0 h-full w-full" />}{" "}
			<MapContainer
				zoom={10}
				center={[activeCityCoords.latitude, activeCityCoords.longitude]}
				style={{ height: "calc(100% - 2rem)", width: "calc(100% - 2rem)", margin: "1rem", borderRadius: "0.25rem" }}
				whenReady={handleMapLoaded}
			>
				<TileLayer
					url={`https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${process.env.STADIA_API_KEY}`}
					attribution="&copy; <a href='https://www.stadiamaps.com/'>Stadia Maps</a>"
				/>
				<FlyToActiveCity activeCityCoords={activeCityCoords} />
			</MapContainer>
		</section>
	)
}

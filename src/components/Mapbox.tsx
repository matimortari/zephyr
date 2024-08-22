import "leaflet/dist/leaflet.css"
import dynamic from "next/dynamic"
import { useEffect } from "react"
import { useMap } from "react-leaflet"
import { useGlobalContext } from "./GlobalContext"

const MapContainer = dynamic(() => import("react-leaflet").then((module) => module.MapContainer), {
	ssr: false, // Disable server-side rendering for this MapContainer component
})
const TileLayer = dynamic(() => import("react-leaflet").then((module) => module.TileLayer), {
	ssr: false, // Disable server-side rendering for this TileLayer component
})

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

	if (!forecast || !forecast.latitude || !forecast.longitude) {
		return <strong>Loading Map</strong>
	}

	const activeCityCoords = { latitude: forecast.latitude, longitude: forecast.longitude }

	return (
		<section className="flex-1 basis-[50%]">
			<MapContainer
				zoom={10}
				center={[activeCityCoords.latitude, activeCityCoords.longitude]}
				style={{ height: "calc(100% - 2rem)", width: "calc(100% - 2rem)", margin: "1rem", borderRadius: "0.25rem" }}
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
				/>
				<FlyToActiveCity activeCityCoords={activeCityCoords} />
			</MapContainer>
		</section>
	)
}

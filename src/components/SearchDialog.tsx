"use client"

import { SearchIcon } from "lucide-react"
import React from "react"
import { useGlobalContext, useGlobalContextUpdate } from "./GlobalContext"
import { Button } from "./ui/button"
import { Command, CommandInput } from "./ui/command"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog"

export default function SearchDialog() {
	const { geoCodedList, inputValue, handleInput } = useGlobalContext()
	const { getClickedCityCoords } = useGlobalContextUpdate()

	const [hoveredIndex, setHoveredIndex] = React.useState<number>(0)

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="items-center justify-center bg-card duration-200 ease-in-out">
					<p className="text-sm text-muted-foreground">Search Locations...</p>
					<SearchIcon size={15} className="ml-40 flex items-center gap-2 text-foreground" />
				</Button>
			</DialogTrigger>

			<DialogContent className="p-0">
				<DialogTitle className="px-4 pt-2 text-base">Search Locations</DialogTitle>
				<Command>
					<CommandInput
						value={inputValue}
						onChangeCapture={handleInput}
						placeholder="Search for a city or location..."
					/>
					<ul>
						<p className="p-2 text-sm text-muted-foreground">Suggestions</p>

						{geoCodedList?.length === 0 || (!geoCodedList && <p>No Results</p>)}

						{geoCodedList &&
							geoCodedList.map(
								(
									item: {
										name: string
										country: string
										admin1: string
										latitude: number
										longitude: number
									},
									index: number
								) => {
									const { country, admin1, name, latitude, longitude } = item
									return (
										<li
											key={index}
											onMouseEnter={() => setHoveredIndex(index)}
											onClick={() => {
												getClickedCityCoords(latitude, longitude, name)
											}}
											className={`cursor-pointer rounded p-4 text-sm ${hoveredIndex === index ? "bg-muted" : ""} `}
										>
											{name}, {admin1 && admin1 + ","} {country}
										</li>
									)
								}
							)}
					</ul>
				</Command>
			</DialogContent>
		</Dialog>
	)
}

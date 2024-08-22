"use client"

import { SearchIcon } from "lucide-react"
import React from "react"
import { useGlobalContext, useGlobalContextUpdate } from "./GlobalContext"
import { Button } from "./ui/button"
import { Command, CommandInput } from "./ui/command"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog"

export default function SearchDialog() {
	const { geoCodedList, inputValue, handleInput } = useGlobalContext()
	const { getClickedCityCoords } = useGlobalContextUpdate() // Ensure this matches

	const [hoveredIndex, setHoveredIndex] = React.useState<number>(0)

	return (
		<div className="button-search">
			<Dialog>
				<DialogTrigger asChild>
					<Button className="inline-flex items-center justify-center bg-card font-medium shadow-lg duration-200 ease-in-out">
						<p className="text-sm text-muted-foreground">Search Locations...</p>
						<div className="ml-40 flex items-center gap-2">
							<SearchIcon size={15} />
						</div>
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
											state: string
											latitude: number
											longitude: number
										},
										index: number
									) => {
										const { country, state, name, latitude, longitude } = item
										return (
											<li
												key={index}
												onMouseEnter={() => setHoveredIndex(index)}
												className={`cursor-pointer rounded p-4 text-sm ${hoveredIndex === index ? "bg-background" : ""} `}
												onClick={() => {
													getClickedCityCoords(latitude, longitude, name)
												}}
											>
												{name}, {state && state + ","} {country}
											</li>
										)
									}
								)}
						</ul>
					</Command>
				</DialogContent>
			</Dialog>
		</div>
	)
}

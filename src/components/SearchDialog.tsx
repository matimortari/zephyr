"use client"
import { SearchIcon } from "lucide-react"
import { useState } from "react"
import { useGlobalContext, useGlobalContextUpdate } from "./GlobalContext"
import { Button } from "./ui/button"
import { Command, CommandInput } from "./ui/command"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog"

export default function SearchDialog() {
	const { geoCodedList, inputValue, handleInput } = useGlobalContext()
	const { getClickedCityCoords } = useGlobalContextUpdate()

	const [hoveredIndex, setHoveredIndex] = useState<number>(0)

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="flex items-center justify-center bg-card">
					<p className="text-sm text-muted-foreground">Search Locations...</p>
					<SearchIcon size={15} className="ml-24 flex items-center gap-2 text-foreground" />
				</Button>
			</DialogTrigger>

			<DialogContent className="scrollable-content scrollbar-hidden max-h-[80vh] p-0">
				<DialogTitle className="p-2 text-base text-muted-foreground">Search Locations</DialogTitle>
				<Command className="flex flex-grow flex-col">
					<CommandInput
						value={inputValue}
						onChangeCapture={handleInput}
						placeholder="Search for a city or location..."
					/>
					<div className="mt-2 flex flex-grow flex-col overflow-y-auto">
						<p className="p-2 text-sm text-muted-foreground">Suggestions</p>
						<ul className="flex flex-col">
							{geoCodedList?.length === 0 && <p>No Results</p>}
							{geoCodedList?.map((item, index) => {
								const { country, admin1, name, latitude, longitude } = item
								return (
									<li
										key={index}
										onMouseEnter={() => setHoveredIndex(index)}
										onClick={() => {
											getClickedCityCoords(latitude, longitude, name)
										}}
										className={`cursor-pointer rounded p-4 text-sm ${hoveredIndex === index ? "bg-muted" : ""}`}
									>
										{name}, {admin1 ? `${admin1},` : ""} {country}
									</li>
								)
							})}
						</ul>
					</div>
				</Command>
			</DialogContent>
		</Dialog>
	)
}

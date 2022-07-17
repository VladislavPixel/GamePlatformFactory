import React from "react"

// Components
import HomeCard from "../ui/homeCard"
// Auxiliary
import homeCards from "../../configAuxiliary/homeCards.json"

const HomeCards = () => {
	return (
		<div className="home-block__cards cards _container">
			<div className="cards__container">
				{homeCards.map((el, i) => <HomeCard key={i} {...el} />)}
			</div>
		</div>
	)
}

export default HomeCards

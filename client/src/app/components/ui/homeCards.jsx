import React from "react"

// Components
import HomeCard from "../ui/homeCard"
// Auxiliary
import configAuxiliary from "../../configAuxiliary.json"

const HomeCards = () => {
	return (
		<div className="home-block__cards cards _container">
			<div className="cards__container">
				{configAuxiliary.homeCards.map((el, i) => <HomeCard key={i} {...el} />)}
			</div>
		</div>
	)
}

export default HomeCards

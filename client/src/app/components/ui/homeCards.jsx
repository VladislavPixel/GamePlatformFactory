import React from "react"
import configAuxiliary from "../../configAuxiliary.json"
import HomeCard from "../ui/homeCard"

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

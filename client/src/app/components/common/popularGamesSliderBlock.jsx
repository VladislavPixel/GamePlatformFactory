import React from "react"
import { useSelector } from "react-redux"
import { getDataTop18Games } from "../../store/games"
import GameCardCommentsSlider from "../ui/gameCardCommentsSlider"

const PopularGamesSliderBlock = () => {
	const dataGamesTop18 = useSelector(getDataTop18Games())
	const dataGamesTop12 = dataGamesTop18.slice(0, 12)
	return (
		<div className="slider-comments__block-slider-comments comments-slider-block">
			<div className="comments-slider-block__column">
				{dataGamesTop12.map(game => <GameCardCommentsSlider key={game._id} {...game} />)}
			</div>
			<div className="comments-slider-block__column"></div>
		</div>
	)
}

export default PopularGamesSliderBlock

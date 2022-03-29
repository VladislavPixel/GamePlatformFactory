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
				<div className="comments-slider-block__container-slides">
					{dataGamesTop12.map(game => <GameCardCommentsSlider key={game._id} {...game} />)}
				</div>
			</div>
			<div className="comments-slider-block__column">
				<h3 className="comments-slider-block__comment-title">Комментарии по игре</h3>
				<div className="comments-slider-block__container-comments"></div>
			</div>
			<div className="comments-slider-block__controller">
				<button type="button" className="comments-slider-block__arrow-block">
					<img src="./images/icons/arrowSquarGreen.svg" alt="Иконка стрелки" />
				</button>
				<button type="button" className="comments-slider-block__arrow-block comments-slider-block__arrow-block_right">
					<img src="./images/icons/arrowSquarGreen.svg" alt="Иконка стрелки" />
				</button>
			</div>
		</div>
	)
}

export default PopularGamesSliderBlock

import React, { useState, useEffect, useRef } from "react"
import GameCardCommentsSlider from "../ui/gameCardCommentsSlider"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { getCommentGamesOnArrayIds } from "../../store/commentsGames"

const PopularGamesSliderBlock = ({ data, currentPagin, onUpdatePagin }) => {
	const refContainerSlides = useRef(null)
	const [heightContainerSlides, setHeightContainerSlides] = useState(null)
	const [stylessContainerSlides, setStylessContainerSlides] = useState({ transform: "translateY(0)" })
	const dataCommentsGames = useSelector(getCommentGamesOnArrayIds(data))
	console.log(dataCommentsGames)
	useEffect(() => {
		setStylessContainerSlides({ transform: `translateY(-${currentPagin * heightContainerSlides}px)` })
	}, [currentPagin])
	useEffect(() => {
		setHeightContainerSlides(refContainerSlides.current.offsetHeight)
	}, [])
	return (
		<div className="slider-comments__block-slider-comments comments-slider-block">
			<div className="comments-slider-block__column">
				<div ref={refContainerSlides} style={stylessContainerSlides} className="comments-slider-block__container-slides">
					{data.map(game => <GameCardCommentsSlider key={game._id} {...game} />)}
				</div>
			</div>
			<div className="comments-slider-block__column">
				<h3 className="comments-slider-block__comment-title">Комментарии по игре</h3>
				<div className="comments-slider-block__container-comments">

				</div>
			</div>
			<div className="comments-slider-block__controller">
				<button onClick={() => {
					if (currentPagin === data.length - 1) {
						onUpdatePagin(0)
						return
					}
					onUpdatePagin(currentPagin + 1)
				}} type="button" className="comments-slider-block__arrow-block">
					<img src="./images/icons/arrowSquarGreen.svg" alt="Иконка стрелки" />
				</button>
				<button onClick={() => {
					if (currentPagin === 0) {
						onUpdatePagin(data.length - 1)
						return
					}
					onUpdatePagin(currentPagin - 1)
				}} type="button" className="comments-slider-block__arrow-block comments-slider-block__arrow-block_right">
					<img src="./images/icons/arrowSquarGreen.svg" alt="Иконка стрелки" />
				</button>
			</div>
		</div>
	)
}

PopularGamesSliderBlock.propTypes = {
	data: PropTypes.array.isRequired,
	currentPagin: PropTypes.number.isRequired,
	onUpdatePagin: PropTypes.func.isRequired
}

export default PopularGamesSliderBlock

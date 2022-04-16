import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"

// Components
import CommentCardSliderComments from "../ui/commentCardSliderComments"
import GameCardCommentsSlider from "../ui/gameCardCommentsSlider"
// Auxiliary
import { getArrayCommentsByIdGames } from "../../store/commentsGamesStoreSlider"

const PopularGamesSliderBlock = ({ data, currentPagin, onUpdatePagin }) => {
	// Вспомогательный ref
	const refContainerSlides = useRef(null)
	// REDUX
	const arrayComments = useSelector(getArrayCommentsByIdGames(data))
	// STATE
	const [heightContainerSlides, setHeightContainerSlides] = useState(null)
	const [stylessContainerSlides, setStylessContainerSlides] = useState({ transform: "translateY(0)" })
	const [stylessContainerComments, setStylessContainerComments] = useState(null)
	//console.log(arrayComments)
	useEffect(() => {
		setStylessContainerSlides({ transform: `translateY(-${currentPagin * heightContainerSlides}px)` })
		setStylessContainerComments({transform: `translateY(-${data.length * heightContainerSlides - ((currentPagin + 1) * heightContainerSlides)}px)`})
	}, [currentPagin, heightContainerSlides, data.length])
	useEffect(() => {
		const height = refContainerSlides.current.offsetHeight
		setHeightContainerSlides(height)
		setStylessContainerComments({ transform: `translateY(-${(data.length - 1) * height}px)` })
	}, [data.length])
	return (
		<div className="slider-comments__block-slider-comments comments-slider-block">
			<div className="comments-slider-block__column">
				<div style={stylessContainerSlides} className="comments-slider-block__container-slides">
					{data.map(game => <GameCardCommentsSlider key={game._id} {...game} />)}
				</div>
			</div>
			<div ref={refContainerSlides} className="comments-slider-block__column">
				<h3 className="comments-slider-block__comment-title">Комментарии по игре</h3>
				<div style={stylessContainerComments} className="comments-slider-block__container-comments">
					{arrayComments.map((arrComments, index) => <CommentCardSliderComments key={index} dataArray={arrComments} />)}
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

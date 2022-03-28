import React from "react"
import PropTypes from "prop-types"

const GameCardCommentsSlider = ({ imageMiddle, altImageMiddle, price, title }) => {
	return (
		<div className="comments-slider-block__wrap-poster">
			<h4 className="comments-slider-block__game-title">{title}</h4>
			<img className="comments-slider-block__img" src={`./images/storeGamesMiddle/${imageMiddle}`} alt={altImageMiddle} />
			<div className="comments-slider-block__footer">
				<span>{price}</span>
				<button type="button">Положить в корзину</button>
			</div>
		</div>
	)
}

GameCardCommentsSlider.propTypes = {
	imageMiddle: PropTypes.string.isRequired,
	altImageMiddle: PropTypes.string.isRequired,
	price: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]).isRequired,
	title: PropTypes.string.isRequired
}

export default GameCardCommentsSlider

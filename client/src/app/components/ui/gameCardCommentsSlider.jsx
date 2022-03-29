import React from "react"
import PropTypes from "prop-types"
import getValuePrice from "../../utils/getValuePrice"

const GameCardCommentsSlider = ({ imageMiddle, altImageMiddle, price, title }) => {
	return (
		<div className="comments-slider-block__wrap-poster wrap-poster-comments-slider">
			<h4 className="wrap-poster-comments-slider__game-title">{title}</h4>
			<img className="wrap-poster-comments-slider__img" src={`./images/storeGamesMiddle/${imageMiddle}`} alt={altImageMiddle} />
			<div className="wrap-poster-comments-slider__footer">
				<span className="wrap-poster-comments-slider__price">{getValuePrice(price)}</span>
				<button className="wrap-poster-comments-slider__btn-car" type="button">Положить в корзину</button>
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

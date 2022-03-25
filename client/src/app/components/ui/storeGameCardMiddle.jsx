import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import getValuePrice from "../../utils/getValuePrice"
import getValueRate from "../../utils/getValueRate"

const StoreGameCardMiddle = ({ title, rate, imageMiddle, altImageMiddle, tags, price, platform, iconForTitle, iconForTitleAlt, subTitle }) => {
	return(
		<div className="list-games-store__column">
			<div className="list-games-store__card-game">
				<Link to="/" className="list-games-store__image-wrap">
					<img src={`./images/storeGamesMiddle/${imageMiddle}`} alt={altImageMiddle} />
				</Link>
				<div className="list-games-store__head-block">
					<img className="list-games-store__icon" src={`./images/icons/${iconForTitle}`} alt={iconForTitleAlt} />
					<h4 className="list-games-store__title">{title}</h4>
					<p className="list-games-store__text">{subTitle}</p>
					<div className="list-games-store__list-tags">
						{tags.map((tag, index) => <span key={index}>{tag}</span>)}
					</div>
					<div className="list-games-store__list-platform">
						{platform.map((el, index) => <img key={index} src={`./images/platformsIcon/${el}`} alt="Иконка платформы, на которой работает игра" />)}
					</div>
				</div>
				<div className="list-games-store__footer-block">
					<p className="list-games-store__price">{getValuePrice(price)}</p>
					<p className="list-games-store__rate">{getValueRate(rate)}</p>
				</div>
			</div>
		</div>
	)
}

StoreGameCardMiddle.propTypes = {
	title: PropTypes.string.isRequired,
	rate: PropTypes.number.isRequired,
	imageMiddle: PropTypes.string.isRequired,
	altImageMiddle: PropTypes.string.isRequired,
	tags: PropTypes.array.isRequired,
	price: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]).isRequired,
	platform: PropTypes.array.isRequired,
	iconForTitle: PropTypes.string.isRequired,
	iconForTitleAlt: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired
}

export default StoreGameCardMiddle

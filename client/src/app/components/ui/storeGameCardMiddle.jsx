import React from "react"
import PropTypes from "prop-types"
import { Link, useNavigate } from "react-router-dom"

// Auxiliary
import getValuePrice from "../../utils/getValuePrice"
import getValueRate from "../../utils/getValueRate"

const StoreGameCardMiddle = ({ title, rate, imageMiddle, altImageMiddle, tags, price, platform, iconForTitle, iconForTitleAlt, subTitle, oldPrice, sale, textPrice, _id }) => {
	const navigate = useNavigate()
	return(
		<div className="list-games-store__column">
			<div className="list-games-store__card-game">
				<Link to={`/game/${_id}`} className="list-games-store__image-wrap">
					<img src={`/images/storeGamesMiddle/${imageMiddle}`} alt={altImageMiddle} />
				</Link>
				<div className="list-games-store__head-block">
					<img className="list-games-store__icon" src={`./images/icons/${iconForTitle}`} alt={iconForTitleAlt} />
					<h4 className="list-games-store__title">{title}</h4>
					<p className="list-games-store__text">{subTitle}</p>
					<div className="list-games-store__list-tags">
						{tags.map((tag, index) => <span key={index}>{tag}</span>)}
					</div>
					<div className="list-games-store__list-platform">
						{platform.map((el, index) => <img title={`Платформа, которой поддерживается эта игра: ${el.split(".")[0]}`} key={index} src={`/images/platformsIcon/${el}`} alt="Иконка платформы, на которой работает игра" />)}
					</div>
					<button className="list-games-store__btn-car  btn-card-game" type="button">в корзину</button>
					<button onClick={() => navigate(`/game/${_id}`)} className="list-games-store__btn-more btn-card-game" type="button">подробнее</button>
				</div>
				<div className="list-games-store__footer-block">
					<p className="list-games-store__price">{textPrice ? textPrice : getValuePrice(price)}</p>
					{oldPrice &&
						<React.Fragment>
							<p className="list-games-store__old-price">{getValuePrice(oldPrice)}</p>
							<p className="list-games-store__sale">sale {sale}%</p>
						</React.Fragment>
					}
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
	subTitle: PropTypes.string.isRequired,
	oldPrice: PropTypes.number,
	sale: PropTypes.number,
	textPrice: PropTypes.string
}

export default StoreGameCardMiddle

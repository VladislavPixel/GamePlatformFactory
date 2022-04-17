import React from "react"
import PropTypes from "prop-types"

// Auxiliary
import getValuePrice from "../../utils/getValuePrice"
import getValueRate from "../../utils/getValueRate"

const StoreTop5Card = ({ imageMiddle, altImageMiddle, title, textPrice, price, rate, sale, oldPrice }) => {
	const activity = [
		{title: "Добавить в корзину", content: <img src="./images/icons/basket.svg" alt="Иконка корзины" />},
		{title: "Добавить в список желаемого", content: <img src="./images/icons/heartWhite.svg" alt="Иконка сердца" />},
		{title: "Рейтинг", content: getValueRate(rate)}
	]
	return (
		<div className="list-top5__column">
			<div className="list-top5__card">
				<div className="list-top5__image-block">
					<img src={`./images/storeGamesMiddle/${imageMiddle}`} alt={altImageMiddle} />
					<button className="list-top5__more" type="button">Подробнее</button>
					<ul className="list-top5__block-activity">
						{activity.map((item, index) => <li title={item.title} key={index}>{item.content}</li>)}
					</ul>
				</div>
				<div className="list-top5__footer">
					<p className="list-top5__name">{title}</p>
					<p className="list-top5__price">{textPrice ? textPrice : getValuePrice(price)}</p>
					{sale &&
						<React.Fragment>
							<p className="list-top5__sale">Скидка: {sale}%</p>
							<p className="list-top5__old-price">{getValuePrice(oldPrice)}</p>
						</React.Fragment>
					}
				</div>
			</div>
		</div>
	)
}

StoreTop5Card.propTypes = {
	imageMiddle: PropTypes.string.isRequired,
	altImageMiddle: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	textPrice: PropTypes.string,
	price: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]).isRequired,
	rate: PropTypes.number.isRequired,
	sale: PropTypes.number,
	oldPrice: PropTypes.number
}

export default StoreTop5Card

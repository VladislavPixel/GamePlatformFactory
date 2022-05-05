import React from "react"
import PropTypes from "prop-types"

// Components
import ActivityMenuButtons from "./activityMenuButtons"
// Auxiliary
import getValuePrice from "../../utils/getValuePrice"
import getValueRate from "../../utils/getValueRate"

const ActivityMenuForGamePage = ({ title, iconForTitle, iconForTitleAlt, tags, messageForMenuActivity, textPrice, price, rate, releaseDate, developer, publisher }) => {
	return (
		<div className="container-head-game-block__activity-menu">
			<div className="container-head-game-block__container-menu game-activity-menu">
				<div className="game-activity-menu__head-row">
					<img className="game-activity-menu__icon" src={`/images/icons/${iconForTitle}`} alt={iconForTitleAlt} />
					<h1 className="game-activity-menu__title">{title}</h1>
				</div>
				<div className="game-activity-menu__tags">{tags.map((item, index) => <span key={index}>{item}</span>)}</div>
				<p className="game-activity-menu__text">{messageForMenuActivity}</p>
				<p className="game-activity-menu__price">{(textPrice ? textPrice : getValuePrice(price))}</p>
				<div className="game-activity-menu__rate-block">
					<div className="game-activity-menu__icon-container"><img src="/images/icons/like.svg" alt="Палец вверх - иконка" /></div>
					<span>{getValueRate(rate)}</span>
					<div className="game-activity-menu__icon-container"><img src="/images/icons/dizlike.svg" alt="Дизлайк - иконка" /></div>
				</div>
				<ActivityMenuButtons textPrice={textPrice} price={price} />
				<p className="game-activity-menu__date">Дата выхода продукта: <span>{releaseDate}г.</span></p>
				<div className="game-activity-menu__block-developer">
					<img className="game-activity-menu__instruments-icon" src="/images/icons/hammer.svg" alt="Иконка инструментов для починки" />
					<p className="game-activity-menu__developer">Команда разработчиков: <a href={developer.linkResourceDeveloper} rel="noreferrer" target="_blank">{developer.name}</a></p>
				</div>
				<div className="game-activity-menu__block-publisher">
					<img className="game-activity-menu__publisher-icon" src="/images/icons/publisher.svg" alt="Иконка издателя" />
					<p className="game-activity-menu__text-publisher">Издатель: <a href={publisher.linkResourcePublisher} rel="noreferrer" target="_blank">{developer.name}</a></p>
				</div>
			</div>
		</div>
	)
}

ActivityMenuForGamePage.propTypes = {
	title: PropTypes.string.isRequired,
	iconForTitle: PropTypes.string.isRequired,
	iconForTitleAlt: PropTypes.string.isRequired,
	tags: PropTypes.array.isRequired,
	messageForMenuActivity: PropTypes.string.isRequired,
	rate: PropTypes.number.isRequired,
	textPrice: PropTypes.string,
	price: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired,
	releaseDate: PropTypes.string.isRequired,
	developer: PropTypes.object.isRequired,
	publisher: PropTypes.object.isRequired
}

export default ActivityMenuForGamePage

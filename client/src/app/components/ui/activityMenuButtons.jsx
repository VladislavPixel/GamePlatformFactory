import React from "react"
import PropTypes from "prop-types"

const ActivityMenuButtons = ({ textPrice, price }) => {
	const typePrice = typeof price
	const textAction = (textPrice ? "Скачать" : typePrice === "string" ? "Я жду!" : "Приобрести")
	return (
		<div className="game-activity-menu__buttons-container">
			<button className="game-activity-menu__btn game-activity-menu__btn_action" type="button">{textAction}</button>
			{typePrice === "number" && price > 0 && <button type="button" className="game-activity-menu__btn game-activity-menu__btn_give">Подарить</button>}
			{!textPrice && <button className="game-activity-menu__btn game-activity-menu__btn_desired" type="button">Добавить в список желаемого</button>}
		</div>
	)
}

ActivityMenuButtons.propTypes = {
	textPrice: PropTypes.string,
	price: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired
}

export default ActivityMenuButtons

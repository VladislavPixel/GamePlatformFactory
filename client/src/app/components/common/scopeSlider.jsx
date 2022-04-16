import React, { useState } from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"

// Components
import ScopeSliderBlock from "../ui/scopeSliderBlock"
// Auxiliary
import { getDataScopeSlider, getDataGamesMiddle } from "../../store/games"
import getValuePrice from "../../utils/getValuePrice"

const ScopeSlider = ({ classesParent }) => {
	// REDUX
	const dataMiddleGames = useSelector(getDataGamesMiddle())
	const dataScopeSlider = useSelector(getDataScopeSlider())
	// STATE
	const [selectedScope, setSelectedScope] = useState(dataScopeSlider[0])
	// HANDLERS
	const handlerUpdateSelectedScope = (newScope) => setSelectedScope(newScope)
	// AUXILIARY
	const games = dataMiddleGames.filter(element => {
		if (element.price === "ОЖИДАНИЕ") return null
		if (element.price >= selectedScope.minScope && element.price <= selectedScope.maxScope) return element
		return null
	})
	return (
		<div className={`${classesParent}__scope-slider slider-scope`}>
			<div className="slider-scope__container _container">
				<h2 className="slider-scope__title">Рубрика: "Диапазон на сегодня"</h2>
				<div className="slider-scope__block-btn">
					{dataScopeSlider.map((item, index) => <button onClick={() => handlerUpdateSelectedScope(item)} className={"slider-scope__button" + (index === 1 ? " slider-scope__button_green" : index === 0 ? " slider-scope__button_yellow" : "") + (selectedScope === item ? " active" : "")} key={item._id} type="button">{`${getValuePrice(item.minScope)} - ${getValuePrice(item.maxScope)}`}</button>)}
				</div>
				<ScopeSliderBlock data={games} />
			</div>
		</div>
	)
}

ScopeSlider.propTypes = {
	classesParent: PropTypes.string.isRequired
}

export default ScopeSlider

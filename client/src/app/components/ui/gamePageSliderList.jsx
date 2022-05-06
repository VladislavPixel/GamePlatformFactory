import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"

// Components
import GamePageSlide from "./gamePageSlide"

const GamePageSliderList = ({ data, onUpdatePoster, currentConfig, onSetWidthList, onSetWidthSlide, configList }) => {
	// AUXILIARY
	const listBlock = useRef(null)

	useEffect(() => {
		onSetWidthList(listBlock.current.offsetWidth)
	}, [])
	return (
		<div style={configList} ref={listBlock} className="data-slider-game__list">
			{data.map((item, index) => <GamePageSlide onSetWidthSlide={onSetWidthSlide} key={index} {...item} onUpdatePoster={onUpdatePoster} currentConfig={currentConfig} />)}
		</div>
	)
}

GamePageSliderList.propTypes = {
	data: PropTypes.array.isRequired,
	onUpdatePoster: PropTypes.func.isRequired,
	currentConfig: PropTypes.object.isRequired,
	onSetWidthList: PropTypes.func.isRequired,
	configList: PropTypes.object.isRequired,
	onSetWidthSlide: PropTypes.func.isRequired
}

export default GamePageSliderList

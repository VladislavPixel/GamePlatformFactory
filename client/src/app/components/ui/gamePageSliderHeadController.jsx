import React, { useState, useRef } from "react"
import { flushSync } from "react-dom"
import PropTypes from "prop-types"

// Components
import GamePageSliderList from "./gamePageSliderList"

const GamePageSliderHeadController = ({ arrHeadData, onUpdatePoster, currentConfig }) => {
	// STATE
	const [currentPage, setCurrentPage] = useState(0)
	const [widthListContainer, setWidthListContainer] = useState(null)
	const [configList, setConfigList] = useState({ transform: "translateX(0px)" })
	const [toddlerConfig, setToddlerConfig] = useState({ left: "0px"})
	const [pointToddler, setPointToddler] = useState(null)
	// AUXILIARY
	const allPage = Math.floor(arrHeadData.length / 5)
	const toddlerEl = useRef(null)
	const band = useRef(null)
	// HANDLERS
	const handlerSetWidthList = (widthData) => setWidthListContainer(widthData)
	const handlerShiftList = (directionStr) => {
		let pageValue = currentPage
		if (directionStr === "left") {
			setCurrentPage(prevState => prevState - 1)
			pageValue--
		}
		if (directionStr === "right") {
			setCurrentPage(prevState => prevState + 1)
			pageValue++
		}
		setConfigList({ transform: `translateX(-${pageValue * widthListContainer}px)` })
	}
	const moveAt = (pageX) => {
		setToddlerConfig({ left: `${pageX - 61}px` })
	}
	const handlerBandMove = (event) => moveAt(event.pageX)
	const handlerToddlerPress= (event) => {
		band.current.addEventListener("mousemove", handlerBandMove)
	}
	console.log(toddlerConfig, "Обновление позиции ползунка по X")
	console.log(band.current?.offsetWidth, "ШИРИНА БЛОКА")
	return (
		<div className="game-block__slider-data data-slider-game">
			<GamePageSliderList configList={configList} data={arrHeadData} onUpdatePoster={onUpdatePoster} currentConfig={currentConfig} onSetWidthList={handlerSetWidthList} />
			<div className="data-slider-game__wrap-controller controller-game-page">
				<button type="button" onClick={() => handlerShiftList("left")} className={"controller-game-page__btn" + (currentPage === 0 ? " no-active" : "")}></button>
				<div ref={band} className="controller-game-page__band">
					<span style={toddlerConfig} ref={toddlerEl} onMouseDown={handlerToddlerPress}></span>
				</div>
				<button type="button" onClick={() => handlerShiftList("right")} className={"controller-game-page__btn controller-game-page__btn_next" + (allPage === currentPage ? " no-active" : "")}></button>
			</div>
		</div>
	)
}

GamePageSliderHeadController.propTypes = {
	arrHeadData: PropTypes.array.isRequired,
	onUpdatePoster: PropTypes.func.isRequired,
	currentConfig: PropTypes.object.isRequired
}

export default GamePageSliderHeadController

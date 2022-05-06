import React, { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"

// Components
import GamePageSliderList from "./gamePageSliderList"

const GamePageSliderHeadController = ({ arrHeadData, onUpdatePoster, currentConfig }) => {
	// STATE
	const [currentPage, setCurrentPage] = useState(0)
	const [widthListContainer, setWidthListContainer] = useState(null)
	const [widthSlideGamePage, setWidthSlideGamePage] = useState(null)
	const [configList, setConfigList] = useState({ transform: "translateX(0px)" })
	const [toddlerConfig, setToddlerConfig] = useState({ left: "0px"})
	// AUXILIARY
	const allPage = Math.ceil(arrHeadData.length / 5) // расчитываем количество страниц для стрелок
	const band = useRef(null) // ссылка на дорожку по которой двигается ползунок
	const toddlerEl = useRef(null) // ссылка на ползунок
	const container = useRef(null) // ссылка на весь блок
	let widthClickOnToddler = null // в момент клика по ползунку мы получаем ширину от его крайней точки до точки клика по нему
	let maximumDisplacement = null // Максимально допустимое смещение ползунка, чтобы он не вываливался за край дорожки
	const leftOffsetBand = band.current?.offsetLeft // смещение дорожки относительно родителя (у него получается от самого края)
	const leftBorderOffsetToddler = toddlerEl.current?.offsetLeft // смещение ползунка относительно родителя
	const widthBand = band.current?.offsetWidth // ширина дорожки ползунка
	// HANDLERS
	const handlerSetWidthList = (widthData) => setWidthListContainer(widthData)
	const handlerSetWidthGamePageSlide = (widthValue) => setWidthSlideGamePage(widthValue)
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
		console.log(widthSlideGamePage * arrHeadData.length, ": ШИРИНА БЛОКА С КАРТИНКАМИ")
		console.log(widthBand, "Ширина дорожки")
		let correctValue = pageX - leftOffsetBand - widthClickOnToddler
		const trigger = correctValue + toddlerEl.current?.offsetWidth
		if (trigger === widthBand) {
			maximumDisplacement = correctValue
		} else if (trigger > widthBand) {
			correctValue = maximumDisplacement
		} else if (correctValue <= 0) {
			correctValue = 0
		}
		setToddlerConfig({ left: `${correctValue}px` })
		setConfigList({ transform: `translateX(-${correctValue}px)` })
	}
	const handlerBandMove = ({ pageX }) => moveAt(pageX)
	const handlerToddlerUp = () => band.current.removeEventListener("mousemove", handlerBandMove)
	function handlerToddlerPress({ pageX }) {
		widthClickOnToddler = pageX - leftOffsetBand - leftBorderOffsetToddler
		band.current.addEventListener("mousemove", handlerBandMove)
		band.current.addEventListener("mouseup", handlerToddlerUp)
	}
	useEffect(() => {
		if (toddlerEl.current) toddlerEl.current.addEventListener("mousedown", handlerToddlerPress)
		if (container.current) container.current.addEventListener("mouseup", handlerToddlerUp)
	})
	return (
		<div ref={container} className="game-block__slider-data data-slider-game">
			<GamePageSliderList configList={configList} data={arrHeadData} onUpdatePoster={onUpdatePoster} currentConfig={currentConfig} onSetWidthList={handlerSetWidthList} onSetWidthSlide={handlerSetWidthGamePageSlide} />
			<div className="data-slider-game__wrap-controller controller-game-page">
				<button type="button" onClick={() => handlerShiftList("left")} className={"controller-game-page__btn" + (currentPage === 0 ? " no-active" : "")}></button>
				<div ref={band} className="controller-game-page__band">
					<span className={allPage === 0 ? "no-active" : ""} style={toddlerConfig} ref={toddlerEl}></span>
				</div>
				<button type="button" onClick={() => handlerShiftList("right")} className={"controller-game-page__btn controller-game-page__btn_next" + (allPage - 1 === currentPage ? " no-active" : "")}></button>
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

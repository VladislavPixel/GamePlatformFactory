import React, { useState, useRef, useEffect, startTransition } from "react"
import PropTypes from "prop-types"

// Components
import GamePageSliderList from "./gamePageSliderList"

const GamePageSliderHeadController = ({ arrHeadData, onUpdatePoster, currentConfig }) => {
	// STATE
	const [currentPage, setCurrentPage] = useState(0)
	const [configList, setConfigList] = useState({ transform: "translateX(0px)" })
	const [toddlerConfig, setToddlerConfig] = useState({ left: "0px"})
	const [maxSlides, setMaxSlides] = useState(5)
	// AUXILIARY
	const allPage = Math.ceil(arrHeadData.length / maxSlides) // расчитываем количество страниц для стрелок
	const band = useRef(null) // ссылка на дорожку по которой двигается ползунок
	const toddlerEl = useRef(null) // ссылка на ползунок
	const container = useRef(null) // ссылка на весь блок
	const widthSlideGamePage = useRef(null) // ширина 1 слайда
	const widthBand = useRef(null) // ширина дорожки ползунка
	const widthListContainer = useRef(null) // ширина контенера со слайдами
	const leftOffsetBand = useRef(null) // смещение дорожки относительно родителя (у него получается от самого края)
	const leftBorderOffsetToddler = useRef(null) // смещение ползунка относительно родителя
	let widthClickOnToddler = null // в момент клика по ползунку мы получаем ширину от его крайней точки до точки клика по нему
	// HANDLERS
	const handlerSetWidthList = (widthData) => widthListContainer.current = widthData
	const handlerSetWidthGamePageSlide = (widthValue) => widthSlideGamePage.current = widthValue
	const handlerShiftList = (directionStr) => {
		if (directionStr === "left" && currentPage === 0) return
		if (directionStr === "right" && allPage - 1 === currentPage) return
		let pageValue = currentPage
		const ratio = widthSlideGamePage.current * arrHeadData.length / widthBand.current
		if (directionStr === "left") {
			setCurrentPage(prevState => prevState - 1)
			pageValue--
		}
		if (directionStr === "right") {
			setCurrentPage(prevState => prevState + 1)
			pageValue++
		}
		if (pageValue === allPage - 1) {
			setToddlerConfig({left: `${widthBand.current - toddlerEl.current.offsetWidth}px`})
		} else {
			setToddlerConfig({ left: `${widthSlideGamePage.current * maxSlides * pageValue / ratio}px` })
		}
		setConfigList({ transform: `translateX(-${pageValue * widthListContainer.current}px)` })
	}
	const moveAt = (pageX) => {
		let correctValue = pageX - leftOffsetBand.current - widthClickOnToddler
		const trigger = correctValue + toddlerEl.current.offsetWidth
		const ratio = widthSlideGamePage.current * arrHeadData.length / widthBand.current
		if (trigger >= widthBand.current) {
			correctValue = widthBand.current - toddlerEl.current.offsetWidth
		} else if (correctValue <= 0) {
			correctValue = 0
		}
		setToddlerConfig({ left: `${correctValue}px` })
		let valueForList = ratio * correctValue
		if (valueForList > widthSlideGamePage.current * (arrHeadData.length - 1)) valueForList = widthSlideGamePage.current * (arrHeadData.length - 1)
		startTransition(() => { // React 18 Function
			setConfigList({ transform: `translateX(-${valueForList}px)` })
		})
	}
	const handlerBandMove = ({ pageX }) => moveAt(pageX)
	const handlerToddlerUp = () => band.current.removeEventListener("mousemove", handlerBandMove)
	function handlerToddlerPress({ pageX }) {
		widthClickOnToddler = pageX - leftOffsetBand.current - leftBorderOffsetToddler.current
		band.current.addEventListener("mousemove", handlerBandMove)
		band.current.addEventListener("mouseup", handlerToddlerUp)
	}
	const handlerMoveContainer = (event) => {
		if (event.target.parentElement !== band.current) handlerToddlerUp()
	}
	useEffect(() => { // ИНИЦИАЛИЗАЦИЯ ПЕРЕМЕННЫХ, важно чтобы рендер их не скидывал в неопределенные значения, поэтому Ref
		if (band.current) {
			widthBand.current = band.current.offsetWidth
			leftOffsetBand.current = band.current.offsetLeft
		}
		if (toddlerEl.current) {
			toddlerEl.current.addEventListener("mousedown", handlerToddlerPress)
			leftBorderOffsetToddler.current = toddlerEl.current.offsetLeft
		}
		if (container.current) {
			container.current.addEventListener("mouseup", handlerToddlerUp)
			container.current.addEventListener("mousemove", handlerMoveContainer)
			const width = container.current.offsetWidth
			let valueMaxElements
			if (width > 800) {
				valueMaxElements = 5
			} else if (width <= 800 && width > 600) {
				valueMaxElements = 4
			} else if (width <= 600 && width > 460) {
				valueMaxElements = 3
			} else if (width <= 460 && width > 319) {
				valueMaxElements = 2
			} else {
				valueMaxElements = 1
			}
			setMaxSlides(valueMaxElements)
		}
	}, [band.current, toddlerEl.current, container.current])
	useEffect(() => {
		leftBorderOffsetToddler.current = toddlerEl.current.offsetLeft
	}, [toddlerConfig])
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

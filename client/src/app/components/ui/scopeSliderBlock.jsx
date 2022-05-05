import React, { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"

// Components
import LiteMessage from "../common/liteMessage"
import ScopeSliderSlide from "./scopeSliderSlide"
// Auxiliary
import getArrayByNumber from "../../utils/getArrayByNumber"

const ScopeSliderBlock = ({ data }) => {
	// STATE
	const [stylessContentBlock, setStylessContentBlock] = useState({ transform: "translateX(0)" })
	const [widthWrapper, setWidthWrapper] = useState(null)
	const [arrayPagins, setArrayPagins] = useState(null)
	const [currentPagin, setCurrentPagin] = useState(0)
	// AUXILIARY
	const wrapperBlock = useRef(null)
	// Высчитываем по брейкпоинтам в SCSS общую длину всех слайдов, за счет того, что widthWrapper всегда быстрее достигает тригерных точек, чем viewport HTML у нас немного разные брейки в SCSS и тут
	const allWidthSlides = widthWrapper <= 400 ?
		widthWrapper * data.length :
		widthWrapper <= 600 ?
		(widthWrapper / 2) * data.length :
		widthWrapper <= 800 ?
		(widthWrapper / 3) * data.length :
		widthWrapper <= 1000 ?
		(widthWrapper / 4) * data.length :
		(widthWrapper / 5) * data.length
	// HANDLERS
	const handlerUpdatePagin = (newPagin) => setCurrentPagin(newPagin)
	const handlerArrow = (directionTxt) => {
		if (directionTxt === "left" && currentPagin !== 0) setCurrentPagin(prevState => prevState - 1)
		if (directionTxt === "right" && currentPagin !== arrayPagins.length - 1) setCurrentPagin(prevState => prevState + 1)
	}

	useEffect(() => {
		setWidthWrapper(wrapperBlock.current.offsetWidth)
	}, [])
	useEffect(() => {
		if (widthWrapper !== null) { // Если не использовать useEffect и не делать эту проверку и просто высчитывать массив пагинации внутри функции браузер падает
			const difference = allWidthSlides - widthWrapper
			if (difference <= 0) {
				setArrayPagins(getArrayByNumber(1))
			} else {
				setArrayPagins(getArrayByNumber(Math.ceil(difference / widthWrapper) + 1))
			}
		}
	}, [widthWrapper, allWidthSlides])
	useEffect(() => {
		setStylessContentBlock({ transform: `translateX(-${currentPagin * widthWrapper}px)` })
	}, [currentPagin, widthWrapper])
	return (
		data.length === 0 ? <LiteMessage iconPath={"sadRobot.svg"} classes="slider-scope__message-not-found" offer="Попробуйте выбрать другой диапазон" title="По выбранному диапазону нет предложений..." /> :
		<div ref={wrapperBlock} className="slider-scope__wrapper">
			<div style={stylessContentBlock} className="slider-scope__content-block">
				{data.map(game => <ScopeSliderSlide key={game._id} {...game} />)}
			</div>
			<div className="slider-scope__controllers scope-slider-controllers">
				<div className={"scope-slider-controllers__prev arrow-scope-slider" + (currentPagin === 0 ? " no-active" : "")}>
					<img onClick={() => handlerArrow("left")} src="/images/icons/roughArrowBlue.svg" alt="Синяя стрелка-влево" />
				</div>
				<div className="scope-slider-controllers__pagins">
					{arrayPagins && arrayPagins.map((pagin, i) => <div onClick={() => handlerUpdatePagin(i)} className={"scope-slider-controllers__pagin" + (i === currentPagin ? " active" : "")} key={pagin._id}></div>)}
				</div>
				<div className={"scope-slider-controllers__next arrow-scope-slider" + (currentPagin === arrayPagins?.length - 1 ? " no-active" : "")}>
					<img onClick={() => handlerArrow("right")} src="/images/icons/roughArrowBlue.svg" alt="Синяя стрелка-вправо" />
				</div>
			</div>
		</div>
	)
}

ScopeSliderBlock.propTypes = {
	data: PropTypes.array.isRequired
}

export default ScopeSliderBlock

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import WideScaleSliderSlide from "../ui/wideScaleSliderSlide"

const WideScaleSlider = ({ classWrap, title, dataSliders, pathImages }) => {
	const [currentSlide, setCurrentSlide] = useState(2)
	const [duration, setDuration] = useState(0.3)
	const [clones] = useState({
		head: [dataSliders[dataSliders.length - 2], dataSliders[dataSliders.length - 1]],
		tail: [dataSliders[0], dataSliders[1]]
	})
	const [correctArray] = useState([
		...clones.head,
		...dataSliders,
		...clones.tail
	])
	const [widthColumn, setWidthColumn] = useState(null)
	const [displacementBody, setDisplacementBody] = useState(null)
	const [translateConfigBody, setTranslateConfigBody] = useState({value: 0, transform: "translateX(0px)"})
	const handlerArrowController = (direction) => {
		if (direction === "left") {
			setDisplacementBody(displacementBody - widthColumn - 30)
			setCurrentSlide(prevState => prevState - 1)
		}
		if (direction === "right") {
			setDisplacementBody(displacementBody + widthColumn + 30)
			setCurrentSlide(prevState => prevState + 1)
		}
	}
	const handlerRef = (widthColumnRef) => setWidthColumn(() => widthColumnRef)
	useEffect(() => {
		setDisplacementBody(widthColumn * clones.head.length - ((widthColumn * 10) / 100) + 15)
	}, [widthColumn, clones.head.length])
	useEffect(() => {
		setTranslateConfigBody(prevState => {
			return {
				...prevState,
				value: displacementBody,
				transitionDuration: duration + "s",
				transform: (displacementBody > 0 ? `translateX(-${displacementBody}px)` : `translateX(${Math.abs(displacementBody)}px)`)
			}
		})
	}, [displacementBody, duration])
	useEffect(() => {
		if (currentSlide === 1) {
			setTimeout(() => {
				setDuration(0)
				setDisplacementBody(prevState => prevState + (widthColumn + 30) * (correctArray.length - clones.tail.length - 2))
				setCurrentSlide(7)
				setTimeout(() => {
					setDuration(0.3)
				}, 0)
			}, 350)
		}
	}, [currentSlide, clones.tail.length, correctArray.length, widthColumn])
	return (
		<div className={`${classWrap}__scale-wide-slider wide-scale-slider`}>
			<h2 className="wide-scale-slider__title">{title}</h2>
			<div className="wide-scale-slider__wrapper">
				<div className="wide-scale-slider__body" style={translateConfigBody}>
					{correctArray.map((item, index) => <WideScaleSliderSlide currentSlide={currentSlide} targetSlideIndex={index} onHandlerRef={handlerRef} {...item} key={index} pathImages={pathImages} />)}
				</div>
				<button onClick={() => {
					handlerArrowController("left")
				}} type="button" className="wide-scale-slider__btn-prev control-wide-scale-slider">
					<img src="./images/icons/arrow-triangle-white.svg" alt="Иконка треугольной трелки" />
				</button>
				<button onClick={() => {
					handlerArrowController("right")
				}} type="button" className="wide-scale-slider__btn-next control-wide-scale-slider">
					<img src="./images/icons/arrow-triangle-white.svg" alt="Иконка треугольной трелки" />
				</button>
			</div>
		</div>
	)
}

WideScaleSlider.propTypes = {
	classWrap: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	dataSliders: PropTypes.array.isRequired,
	pathImages: PropTypes.string.isRequired
}

export default WideScaleSlider
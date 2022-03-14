import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import WideScaleSliderSlide from "../ui/wideScaleSliderSlide"

const WideScaleSlider = ({ classWrap, title, dataSliders, pathImages }) => {
	const [currentSlide, setCurrentSlide] = useState(1)
	const [data, setData] = useState(dataSliders)
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
		setDisplacementBody(widthColumn - ((widthColumn * 10) / 100) - 15)
	}, [widthColumn])
	useEffect(() => {
		setTranslateConfigBody(prevState => {
			return {
				...prevState,
				value: displacementBody,
				transform: (displacementBody > 0 ? `translateX(-${displacementBody}px)` : `translateX(${Math.abs(displacementBody)}px)`)
			}
		})
	}, [displacementBody])
	useEffect(() => {
		
	}, [currentSlide])
	return (
		<div className={`${classWrap}__scale-wide-slider wide-scale-slider`}>
			<h2 className="wide-scale-slider__title">{title}</h2>
			<div className="wide-scale-slider__wrapper">
				<div className="wide-scale-slider__body" style={translateConfigBody}>
					{data.map((item, index) => <WideScaleSliderSlide currentSlide={currentSlide} id={index} onHandlerRef={handlerRef} {...item} key={index} pathImages={pathImages} />)}
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
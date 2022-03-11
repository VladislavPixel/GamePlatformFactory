import React, { useState } from "react"
import PropTypes from "prop-types"
import WideScaleSliderSlide from "../ui/wideScaleSliderSlide"

const WideScaleSlider = ({ classWrap, title, dataSliders, pathImages }) => {
	const [widthColumn, setWidthColumn] = useState(0)
	const handlerArrowController = (direction) => {
		console.log(direction)
	}
	const handlerRef = (widthColumn) => setWidthColumn(widthColumn)
	return (
		<div className={`${classWrap}__scale-wide-slider wide-scale-slider`}>
			<h2 className="wide-scale-slider__title">{title}</h2>
			<div className="wide-scale-slider__wrapper">
				<div className="wide-scale-slider__body">
					{dataSliders.map((item, index) => <WideScaleSliderSlide id={index} onHandlerRef={handlerRef} {...item} key={index} pathImages={pathImages} />)}
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
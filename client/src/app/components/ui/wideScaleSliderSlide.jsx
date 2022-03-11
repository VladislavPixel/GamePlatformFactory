import React from "react"
import PropTypes from "prop-types"

const WideScaleSliderSlide = ({ pathImages, slider1, title, slider2, slider2Title }) => {
	return (
		<>
			<div className="wide-scale-slider__column">
				<img src={pathImages + slider1.path} alt={slider1.alt} />
				<div className="wide-scale-slider__content">
					<h3 className="wide-scale-slider__text">{title}</h3>
					<button className="wide-scale-slider__btn">Подробнее</button>
				</div>
			</div>
			<div className="wide-scale-slider__column wide-scale-slider__column_additional">
				{slider2.map((el, index) => <img key={index} src={pathImages + el.path} alt={el.alt} />)}
				<div className="wide-scale-slider__name">{slider2Title}</div>
			</div>
		</>
	)
}

WideScaleSliderSlide.propTypes = {
	pathImages: PropTypes.string.isRequired,
	slider1: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	slider2: PropTypes.array.isRequired,
	slider2Title: PropTypes.string.isRequired
}

export default WideScaleSliderSlide

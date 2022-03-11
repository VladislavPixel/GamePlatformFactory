import React from "react"
import PropTypes from "prop-types"
import WideScaleSliderSlide from "../ui/wideScaleSliderSlide"

const WideScaleSlider = ({ classWrap, title, dataSliders, pathImages }) => {
	return (
		<div className={`${classWrap}__scale-wide-slider wide-scale-slider`}>
			<h2 className="wide-scale-slider__title">{title}</h2>
			<div className="wide-scale-slider__wrapper">
				<div className="wide-scale-slider__body">
					{dataSliders.map((item, index) => <WideScaleSliderSlide {...item} key={index} pathImages={pathImages} />)}
				</div>
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
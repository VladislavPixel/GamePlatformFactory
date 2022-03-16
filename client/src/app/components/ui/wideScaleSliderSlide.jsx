import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"

const WideScaleSliderSlide = ({ targetSlideIndex, pathImages, slides, title, onHandlerRef, currentSlide }) => {
	const isEven = ((targetSlideIndex + 1) % 2) === 0
	const refColumn = useRef(null)
	useEffect(() => {
		if (targetSlideIndex === 0) {
			onHandlerRef(refColumn.current.offsetWidth)
		}
	}, [targetSlideIndex, onHandlerRef])
	return (
		<div ref={refColumn} className={`wide-scale-slider__column wide-scale-slider__column_${isEven ? "additional" : "first"} ${currentSlide === targetSlideIndex ? "active" : ""}`}>
			{!isEven ?
				<React.Fragment>
					<img src={pathImages + slides.path} alt={slides.alt} />
					<div className="wide-scale-slider__content">
						<h3 className="wide-scale-slider__text">{title}</h3>
						<button type="button" className="wide-scale-slider__btn">Подробнее</button>
					</div>
				</React.Fragment> :
				<React.Fragment>
					{slides.map((el, index) => {
						return (
							<div key={index} className="wide-scale-slider__block-add">
								<img src={pathImages + el.path} alt={el.alt} />
							</div>
						)
					})}
					<div className="wide-scale-slider__name">{title}</div>
				</React.Fragment>
			}
		</div>
	)
}

WideScaleSliderSlide.propTypes = {
	pathImages: PropTypes.string.isRequired,
	slides: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array
	]),
	title: PropTypes.string.isRequired,
	onHandlerRef: PropTypes.func,
	targetSlideIndex: PropTypes.number.isRequired,
	currentSlide: PropTypes.number.isRequired
}

export default WideScaleSliderSlide

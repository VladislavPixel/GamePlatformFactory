import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"

const WideScaleSliderSlide = ({ id, pathImages, slides, title, onHandlerRef, currentSlide, addClass }) => {
	const refColumn = useRef(null)
	useEffect(() => {
		if (id === 0) {
			onHandlerRef(refColumn.current.offsetWidth)
		}
	}, [id, onHandlerRef])
	return (
		<>
			{((id + 1) % 2) !== 0 ? 
				<div ref={refColumn} className={"wide-scale-slider__column wide-scale-slider__column_first" + (currentSlide === id ? " active" : "")}>
					<img src={pathImages + slides.path} alt={slides.alt} />
					<div className="wide-scale-slider__content">
						<h3 className="wide-scale-slider__text">{title}</h3>
						<button type="button" className="wide-scale-slider__btn">Подробнее</button>
					</div>
				</div> :
				<div className={"wide-scale-slider__column wide-scale-slider__column_additional" + (currentSlide === id ? " active" : "")}>
					{slides.map((el, index) => {
						return (
							<div key={index} className="wide-scale-slider__block-add">
								<img src={pathImages + el.path} alt={el.alt} />
							</div>
						)
					})}
					<div className="wide-scale-slider__name">{title}</div>
				</div>
			}
		</>
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
	id: PropTypes.number.isRequired,
	currentSlide: PropTypes.number.isRequired
}

export default WideScaleSliderSlide

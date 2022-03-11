import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"

const WideScaleSliderSlide = ({ id, pathImages, slider1, title, slider2, slider2Title, onHandlerRef }) => {
	const refColumn = useRef(null)
	useEffect(() => {
		if (id === 0) {
			onHandlerRef(refColumn.current.offsetWidth)
		}
	}, [id, onHandlerRef])
	return (
		<>
			<div ref={refColumn} className="wide-scale-slider__column wide-scale-slider__column_first">
				<img src={pathImages + slider1.path} alt={slider1.alt} />
				<div className="wide-scale-slider__content">
					<h3 className="wide-scale-slider__text">{title}</h3>
					<button type="button" className="wide-scale-slider__btn">Подробнее</button>
				</div>
			</div>
			<div className="wide-scale-slider__column wide-scale-slider__column_additional">
				{slider2.map((el, index) => {
					return (
						<div key={index} className="wide-scale-slider__block-add">
							<img src={pathImages + el.path} alt={el.alt} />
						</div>
					)
				})}
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
	slider2Title: PropTypes.string.isRequired,
	onHandlerRef: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired
}

export default WideScaleSliderSlide

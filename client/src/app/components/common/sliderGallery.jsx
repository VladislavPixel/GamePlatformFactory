import React, { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"

// Components
import ContentSliderGallery from "../ui/contentSliderGallery"

const SliderGallery = ({ title, data, posters, ...rest }) => {
	// STATE
	const [currentValue, setCurrentValue] = useState(0)
	const [elementConfig, setElementConfig] = useState(null)
	const [screenBodyOffset, setScreenBodyOffset] = useState(0)
	const [screenBodyTranslate, setScreenBodyTranslate] = useState({ transform: "translateX(0px)" })
	const [contentWrapperTranslate, setContentWrapperTranslate] = useState({ transform: "translateY(0px)" })
	// AUXILIARY
	const navigate = useNavigate()
	const SLIDER_GALLERY_HEIGHT = 512
	const refScrinBody = useRef(null)
	const array = []
	const currentSlide = data[currentValue]
	for (let i = 0; i < data.length; i++) array.push({ id: i })
	// HANDLERS
	const getTranslateStyles = (direction, newCurrentValue) => {
		let value
		let val
		if (direction === "left") {
			value = screenBodyOffset * newCurrentValue
			val = SLIDER_GALLERY_HEIGHT * newCurrentValue
		}
		if (direction === "right") {
			value = screenBodyOffset * newCurrentValue
			val = SLIDER_GALLERY_HEIGHT * newCurrentValue
		}

		setScreenBodyTranslate({ transform: `translateX(-${value}px)` })
		setContentWrapperTranslate({ transform: `translateY(-${val}px)` })
	}
	const handlerUpdateCurrentSlide = (value) => {
		setElementConfig(null)
		if (currentValue > value) getTranslateStyles("left", value)
		if (currentValue < value) getTranslateStyles("right", value)
		setCurrentValue(value)
	}
	const handlerBtnArrow = (direction) => {
		let actualValue = currentValue
		if (direction === "left" && currentValue !== 0) {
			actualValue -= 1
			getTranslateStyles("left", actualValue)
		}
		if (direction === "right" && currentValue !== (array.length - 1)) {
			actualValue += 1
			getTranslateStyles("right", actualValue)
		}
		setCurrentValue(actualValue)
		setElementConfig(null)
	}
	const handlerMouseOverScreen = (event) => setElementConfig({ alt: event.target.alt, path: event.target.currentSrc })
	const handlerMouseOut = (event) => setElementConfig(null)
	const getPoster = () => {
		if (!elementConfig) {
			return (
				<div ref={refScrinBody} style={screenBodyTranslate} className="block-slider-gallery__body">
					{posters.map((item, index) => <div key={index} className="block-slider-gallery__wrap-img"><img src={`${rest.globPath}${item.pathView}`} alt={item.alt} /></div>)}
				</div>
			)
		}
		return <img className="block-slider-gallery__main-poster" src={elementConfig.path} alt={elementConfig.alt} />
	}
	useEffect(() => {
		setScreenBodyOffset(refScrinBody.current.offsetWidth)
	}, [])
	return (
		<div className="slider-gallery">
			<div className="slider-gallery__container _container">
				<h2 className="slider-gallery__title">{title}</h2>
				<div className="slider-gallery__block block-slider-gallery">
					<div className="block-slider-gallery__column">
						{getPoster()}
						<div className="block-slider-gallery__content-poster">
							<div className="block-slider-gallery__text">{currentSlide.titleChief}</div>
							<button onClick={() => navigate(`/game/${currentSlide._id}`)} type="button" className="block-slider-gallery__btn">{currentSlide.price === "ОЖИДАНИЕ" ? "Быть первым" : "Узнать больше"}</button>
						</div>
						<div onClick={() => {
							handlerBtnArrow("left")
						}} className={`block-slider-gallery__arrow block-slider-gallery__arrow_left` + (currentValue === 0 ? " none-show" : "")}>
							<img src="/images/icons/doubleArrow.svg" alt="Иконка стрелки-контроллера" />
						</div>
						<div onClick={() => {
							handlerBtnArrow("right")
						}} className={`block-slider-gallery__arrow block-slider-gallery__arrow_right` + (currentValue === (array.length - 1) ? " none-show" : "")}>
							<img src="/images/icons/doubleArrow.svg" alt="Иконка стрелки-контроллера" />
						</div>
					</div>
					<div className="block-slider-gallery__column" style={{ maxHeight: SLIDER_GALLERY_HEIGHT + "px" }}>
						<div style={contentWrapperTranslate} className="block-slider-gallery__wrapper">
							{data.map((content, i) => <ContentSliderGallery key={i} rest={rest} onScreenOver={handlerMouseOverScreen} onScreenOut={handlerMouseOut} heightElement={SLIDER_GALLERY_HEIGHT} data={content} />)}
						</div>
					</div>
				</div>
				<div className="slider-gallery__pagination">{array.map((e) => <span className={currentValue === e.id ? "active" : ""} onClick={() => handlerUpdateCurrentSlide(e.id)} key={e.id}></span>)}</div>
			</div>
		</div>
	)
}

SliderGallery.propTypes = {
	title: PropTypes.string,
	data: PropTypes.array,
	posters: PropTypes.array,
	rest: PropTypes.object
}

export default SliderGallery

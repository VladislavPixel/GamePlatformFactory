import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import ScreenSliderGallery from "../ui/screenSliderGallery"

const SliderGallery = ({ title, data, posters, ...rest }) => {
	const [currentValue, setCurrentValue] = useState(0)
	const [elementConfig, setElementConfig] = useState(null)
	const [screenBodyOffset, setScreenBodyOffset] = useState(0)
	const [screenBodyTranslate, setScreenBodyTranslate] = useState({ transform: `translateX(${0 + "px"})` })
	const refScrinBody = useRef(null)
	const array = []
	const currentSlide = data[currentValue]
	for (let i = 0; i < data.length; i++) {
		array.push({ id: i })
	}
	const getTranslateStyles = (direction) => {
		if (direction === "left") {
			const value = screenBodyOffset * (currentValue - 1)
			setScreenBodyTranslate({ transform: `translateX(-${value + "px"})` })
		}
		if (direction === "right") {
			const value = screenBodyOffset * (currentValue + 1)
			setScreenBodyTranslate({ transform: `translateX(-${value + "px"})` })
		}
	}
	const handlerUpdateCurrentSlide = (value) => {
		setElementConfig(null)
		if (currentValue > value) {
			getTranslateStyles("left")
		}
		if (currentValue < value) {
			getTranslateStyles("right")
		}
		setCurrentValue(value)
	}
	const handlerBtnArrow = (direction) => {
		if (direction === "left" && currentValue !== 0) {
			setCurrentValue((prevState) => prevState - 1)
			getTranslateStyles("left")
		}
		if (direction === "right" && currentValue !== (array.length - 1)) {
			setCurrentValue((prevState) => prevState + 1)
			getTranslateStyles("right")
		}
		setElementConfig(null)
	}
	const handlerMouseOverScreen = (event) => setElementConfig({ alt: event.target.alt, path: event.target.currentSrc })
	const handlerMouseOut = (event) => setElementConfig(null)
	const getPoster = () => {
		if (!elementConfig) {
			return (
				<div ref={refScrinBody} style={screenBodyTranslate} className="block-slider-gallery__body">
					{posters.map((item, index) => <img key={index} src={`${rest.globPath}${item.pathView}`} alt={item.alt} />)}
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
							<button type="button" className="block-slider-gallery__btn">{currentSlide.titleButton}</button>
						</div>
						<div onClick={() => {
							handlerBtnArrow("left")
						}} className={`block-slider-gallery__arrow block-slider-gallery__arrow_left` + (currentValue === 0 ? " none-show" : "")}>
							<img src="./images/icons/double-arrow.svg" alt="Иконка стрелки-контроллера" />
						</div>
						<div onClick={() => {
							handlerBtnArrow("right")
						}} className={`block-slider-gallery__arrow block-slider-gallery__arrow_right` + (currentValue === (array.length - 1) ? " none-show" : "")}>
							<img src="./images/icons/double-arrow.svg" alt="Иконка стрелки-контроллера" />
						</div>
					</div>
					<div className="block-slider-gallery__column">
						<div className="block-slider-gallery__content content-slider-gallery">
							<h3 className="content-slider-gallery__name">{currentSlide.gallery.title}</h3>
							<div className="content-slider-gallery__screenshots-row">
								{currentSlide.gallery.galleryImages.map((screen, i) => <ScreenSliderGallery onScreenOut={handlerMouseOut} onScreenOver={handlerMouseOverScreen} key={i} {...screen} {...rest} />)}
							</div>
							<div className="content-slider-gallery__message">{currentSlide.gallery.text}</div>
							<div className="content-slider-gallery__tags">
								{currentSlide.gallery.tags.map((el, m) => <div key={m} className="content-slider-gallery__tag">{el}</div>)}
							</div>
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

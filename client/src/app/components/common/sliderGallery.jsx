import React, {useState} from "react"
import PropTypes from "prop-types"
import ScreenSliderGallery from "../ui/screenSliderGallery"

const SliderGallery = ({ title, data, ...rest }) => {
	const [currentValue, setCurrentValue] = useState(0)
	const array = []
	const currentSlide = data[currentValue]
	for(let i = 0; i < data.length; i++) {
		array.push({id: i})
	}
	const handlerUpdateCurrentSlide = (value) => setCurrentValue(value)
	return(
		<div className="slider-gallery">
			<div className="slider-gallery__container _container">
				<h2 className="slider-gallery__title">{title}</h2>
				<div className="slider-gallery__block block-slider-gallery">
					<div className="block-slider-gallery__column">
						<img className="block-slider-gallery__main-poster" src={`${rest.globPath}${currentSlide.pathView}`} alt={currentSlide.alt} />
						<div className="block-slider-gallery__content-poster">
							<div className="block-slider-gallery__text">{currentSlide.titleChief}</div>
							<button type="button" className="block-slider-gallery__btn">{currentSlide.titleButton}</button>
						</div>
					</div>
					<div className="block-slider-gallery__column">
						<div className="block-slider-gallery__content content-slider-gallery">
							<h3 className="content-slider-gallery__name">{currentSlide.gallery.title}</h3>
							<div className="content-slider-gallery__screenshots-row">
								{currentSlide.gallery.galleryImages.map((screen, i) => <ScreenSliderGallery key={i} {...screen} {...rest} />)}
							</div>
							<div className="content-slider-gallery__message">{currentSlide.gallery.text}</div>
							<div className="content-slider-gallery__tags">
								{currentSlide.gallery.tags.map((el, m) => <div key={m} className="content-slider-gallery__tag">{el}</div>)}
							</div>
						</div>
					</div>
				</div>
				<div className="slider-gallery__pagination">{array.map((e) => <span onClick={() => handlerUpdateCurrentSlide(e.id)} key={e.id}></span>)}</div>
			</div>
		</div>
	)
}

SliderGallery.propTypes = {
	title: PropTypes.string,
	data: PropTypes.array,
	rest: PropTypes.object
}

export default SliderGallery

import React from "react"
import PropTypes from "prop-types"
import ScreenSliderGallery from "./screenSliderGallery"

const ContentSliderGallery = ({ heightElement, data, onScreenOut, onScreenOver, rest }) => {
	return (
		<div className="block-slider-gallery__content content-slider-gallery" style={{ minHeight: heightElement + "px" }}>
			<h3 className="content-slider-gallery__name">{data.gallery.title}</h3>
			<div className="content-slider-gallery__screenshots-row">
				{data.gallery.galleryImages.map((screen, i) => <ScreenSliderGallery key={i} onScreenOut={onScreenOut} onScreenOver={onScreenOver} {...screen} {...rest} />)}
			</div>
			<div className="content-slider-gallery__message">{data.gallery.text}</div>
			<div className="content-slider-gallery__tags">
				{data.gallery.tags.map((el, m) => <div key={m} className="content-slider-gallery__tag">{el}</div>)}
			</div>
		</div>
	)
}

ContentSliderGallery.propTypes = {
	heightElement: PropTypes.number.isRequired,
	data: PropTypes.object.isRequired,
	onScreenOut: PropTypes.func.isRequired,
	onScreenOver: PropTypes.func.isRequired,
	rest: PropTypes.object.isRequired
}

export default ContentSliderGallery

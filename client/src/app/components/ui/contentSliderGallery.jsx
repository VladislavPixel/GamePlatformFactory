import React from "react"
import PropTypes from "prop-types"

// Components
import ScreenSliderGallery from "./screenSliderGallery"

const ContentSliderGallery = ({ heightElement, data, onScreenOut, onScreenOver, rest }) => {
	// AUXILIARY
	const { galleryImages, title, price, tags } = data
	return (
		<div className="block-slider-gallery__content content-slider-gallery" style={{ minHeight: heightElement + "px" }}>
			<h3 className="content-slider-gallery__name">{title}</h3>
			<div className="content-slider-gallery__screenshots-row">
				{galleryImages.map((screen, i) => <ScreenSliderGallery key={i} onScreenOut={onScreenOut} onScreenOver={onScreenOver} {...screen} {...rest} />)}
			</div>
			<div className="content-slider-gallery__message">{price === "ОЖИДАНИЕ" ? "Ждем выхода!!!" : "Уже доступно"}</div>
			<div className="content-slider-gallery__tags">
				{tags.map((el, m) => <div key={m} className="content-slider-gallery__tag">{el}</div>)}
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

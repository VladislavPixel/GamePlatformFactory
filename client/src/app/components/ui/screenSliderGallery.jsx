import React from "react"
import PropTypes from "prop-types"

const ScreenSliderGallery = ({ path, alt, globPath }) => {
	return (
		<div className="content-slider-gallery__column">
			<img className="content-slider-gallery__screen-img" src={`${globPath}${path}`} alt={alt} />
		</div>
	)
}

ScreenSliderGallery.propTypes = {
	path: PropTypes.string,
	alt: PropTypes.string,
	globPath: PropTypes.string
}

export default ScreenSliderGallery
